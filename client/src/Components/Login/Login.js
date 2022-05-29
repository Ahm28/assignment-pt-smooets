import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { UserContext } from "../../context/userContext";
import React, { useContext, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../config/api";

export default function Login() {
  const [state, dispatch] = useContext(UserContext);
  const [message, setMessage] = useState(null);

  let navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const { email, password } = form;

  const handleChange = (prop) => (e) => {
    setForm({
      ...form,
      [prop]: e.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setForm({
      ...form,
      showPassword: !form.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post("/login", body, config);
      console.log(response);

      if (response?.status == 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        navigate("/resume");
      }
      setForm({
        email: "",
        password: "",
      });
    } catch (error) {
      const alert = (
        <Alert severity="error">Email and Password not Match</Alert>
      );
      setForm({
        email: "",
        password: "",
      });
      setMessage(alert);
      console.log(error);
    }
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        LOGIN
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        {message && message}
        <TextField
          required
          id="outlined-required"
          label="Email"
          sx={{ width: "100%", mt: 3, mb: 1 }}
          name="email"
          value={email}
          onChange={handleChange("email")}
        />
        <FormControl sx={{ width: "100%", mb: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={form.showPassword ? "text" : "password"}
            value={form.password}
            name="password"
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {form.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Link to="/forget" style={{ color: "#808e9b", textDecoration: "none" }}>
          <Typography sx={{ my: 1 }}>Forgot Password?</Typography>
        </Link>
        <Button variant="contained" type="submit">
          LOGIN
        </Button>
      </Box>
    </Box>
  );
}

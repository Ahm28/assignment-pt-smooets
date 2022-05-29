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
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import { API } from "../../config/api";

export default function Register() {
  const [message, setMessage] = React.useState(null);
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const { username, email, password } = form;

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

      const response = await API.post("/register", body, config);

      if (response.data.status == "Success Add User") {
        const alert = <Alert severity="info">Success Register</Alert>;
        setMessage(alert);
      } else {
        const alert = <Alert severity="warning">Email has Declared</Alert>;
        setMessage(alert);
      }
      setForm({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      const alert = <Alert severity="error">Please try another email</Alert>;
      setMessage(alert);
      console.log(error);
    }
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        REGISTER
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        {message && message}
        <TextField
          required
          id="outlined-required"
          label="Username"
          sx={{ width: "100%", mt: 3, mb: 1 }}
          name="username"
          value={username}
          onChange={handleChange("username")}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          name="email"
          value={email}
          sx={{ width: "100%", mb: 1 }}
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
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Box>
    </Box>
  );
}

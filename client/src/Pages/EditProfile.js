import {
  Button,
  Container,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { API } from "../config/api";

export default function EditProfile() {
  let navigate = useNavigate();

  const [user, setUser] = React.useState({});
  const [formUser, setFormUser] = React.useState({
    username: "",
    email: "",
  });

  const [formProfile, setFormProfile] = React.useState({
    old: "",
    role: "",
    phone: "",
    about: "",
    address: "",
  });

  const { username, email } = formUser;
  //   const { old, role, phone, about, address } = formProfile;

  const getUser = async () => {
    try {
      const response = await API.get(`/user`);
      setFormUser({
        ...formUser,
        username: response.data.data.data.username,
        email: response.data.data.data.email,
      });

      //   console.log(response.data.data.data);
      //   if (response.data.data.data.profile != null) {
      //     setFormProfile({
      //       old: response.data.data.data.profile.old,
      //       role: response.data.data.data.profile.role,
      //       phone: response.data.data.data.profile.phone,
      //       about: response.data.data.data.profile.about,
      //       address: response.data.data.data.profile.address,
      //     });
      //   }
      setUser(response.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUser();
  }, []);

  const handleChangeUser = (e) => {
    setFormUser({
      ...formUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeProfile = (e) => {
    setFormProfile({
      ...formProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUser = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(formUser);

      const response = await API.patch("/user/" + user.id, body, config);

      console.log(response);
      navigate("/resume");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitUProfile = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(formProfile);

      const response = await API.patch("/profile", body, config);

      console.log(response);
      navigate("/resume");
    } catch (error) {
      console.log(error);
    }
  };

  //   console.log(formProfile.address);

  return (
    <>
      <Box
        comsponent="div"
        sx={{
          my: 8,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Edit Profile
          </Typography>
          <Box
            component="form"
            sx={{ my: 5, "& > :not(style)": { m: 1, width: "30%" } }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmitUser}
          >
            <Typography variant="h6">Profile</Typography>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              name="username"
              value={username}
              onChange={handleChangeUser}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              value={email}
              onChange={handleChangeUser}
            />
            <br />
            <Button variant="contained" type="submit">
              <SaveOutlinedIcon /> Save
            </Button>
          </Box>
          <Box
            component="form"
            sx={{ my: 5, "& > :not(style)": { m: 1, width: "30%" } }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmitUProfile}
          >
            <Typography variant="h6">Bio</Typography>
            <TextField
              id="outlined-basic"
              label="Role"
              variant="outlined"
              name="role"
              value={formProfile.role}
              onChange={handleChangeProfile}
            />
            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              name="old"
              value={formProfile.old}
              onChange={handleChangeProfile}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              type="number"
              name="phone"
              value={formProfile.phone}
              onChange={handleChangeProfile}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="About"
              variant="outlined"
              multiline
              rows={5}
              name="about"
              value={formProfile.about}
              onChange={handleChangeProfile}
            />
            <TextField
              id="outlined-basic"
              multiline
              rows={5}
              label="Address"
              variant="outlined"
              name="address"
              value={formProfile.address}
              onChange={handleChangeProfile}
            />
            <br />
            <Button variant="contained" type="submit">
              <SaveOutlinedIcon /> Save
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

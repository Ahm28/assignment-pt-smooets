import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Fade, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Login from "../Login/Login";
import Register from "../Login/Regsiter";
import { UserContext } from "../../context/userContext";
import { setAuthToken } from "../../config/api";
import { Link, useNavigate } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const AppBarComp = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [modalLogin, setModalLogin] = React.useState(false);
  const [modalRegister, setModalRegister] = React.useState(false);
  const [state, dispatch] = React.useContext(UserContext);

  console.log(state);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let navigate = useNavigate();
  const logout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  const navIsLogin = () => {
    return (
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <Link to={`/editProfile`}>
            <MenuItem>
              <Typography
                textAlign="center"
                sx={{ textDecoration: "none", color: "black" }}
              >
                Edit Profile
              </Typography>
            </MenuItem>
          </Link>
          <MenuItem>
            <Typography textAlign="center" onClick={logout}>
              Logout
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    );
  };

  const navIsntLogin = () => {
    return (
      <Box>
        <Box sx={{ flexGrow: 0 }}>
          <Button
            variant="contained"
            sx={{ mr: 2 }}
            onClick={() => setModalLogin(true)}
          >
            Login
          </Button>
          <Button variant="outlined" onClick={() => setModalRegister(true)}>
            Register
          </Button>
        </Box>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={modalLogin}
          onClose={() => setModalLogin(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modalLogin}>
            <Box sx={style}>
              <Login />
            </Box>
          </Fade>
        </Modal>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={modalRegister}
          onClose={() => setModalRegister(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modalRegister}>
            <Box sx={style}>
              <Register />
            </Box>
          </Fade>
        </Modal>
      </Box>
    );
  };

  return (
    <AppBar position="static" color="transparent">
      <Container>
        <Toolbar disableGutters>
          <Link to="/resume">
            <Box
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <img
                src="https://capp.nicepage.com/dc61006929b64bc8e6c4809d58ba9f86be95affd/images/default-logo.png"
                alt="logo"
              />
            </Box>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link to="/resume">
            <Box
              component="div"
              sx={{ mr: 2, display: { xs: "flex", md: "none" }, flexGrow: 1 }}
            >
              <img
                src="https://capp.nicepage.com/dc61006929b64bc8e6c4809d58ba9f86be95affd/images/default-logo.png"
                alt="logo"
              />
            </Box>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {localStorage.token ? navIsLogin() : navIsntLogin()}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarComp;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import logo from "../../../images/logo.png";
import { Container } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import MoreIcon from "@mui/icons-material/MoreVert";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import useAuth from "./../../../Hooks/useAuth";

export default function Header() {
  const { user, logout, admin } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NavLink
          to="/home"
          style={{
            textDecoration: "none",
            color: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <HomeIcon sx={{ mr: 1 }}></HomeIcon>
          Home
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to="/about"
          style={{
            textDecoration: "none",
            color: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SupervisedUserCircleIcon sx={{ mr: 1 }} />
          About
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to="/products"
          style={{
            textDecoration: "none",
            color: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <StorefrontIcon sx={{ mr: 1 }} />
          Products
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to="/contact"
          style={{
            textDecoration: "none",
            color: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PermContactCalendarIcon sx={{ mr: 1 }} />
          Contact
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to="/dashboard"
          style={{
            textDecoration: "none",
            color: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DashboardIcon sx={{ mr: 1 }} />
          Dashboard
        </NavLink>
      </MenuItem>
      <MenuItem>
        {user?.email ? (
          <Button onClick={logout} color="success" variant="outlined">
            <LogoutIcon sx={{ mr: 1 }}></LogoutIcon>
            Logout
          </Button>
        ) : (
          <NavLink
            to="/login"
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button color="success" variant="outlined">
              <LoginIcon sx={{ mr: 1 }}></LoginIcon>
              Login
            </Button>
          </NavLink>
        )}
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="success">
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <Link to="/home">
                <img style={{ width: "40px" }} src={logo} alt="" />
              </Link>
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              PLANTOUS
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              {user?.email && (
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  {user?.displayName}
                </Typography>
              )}
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <NavLink
                to="/home"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit">Home</Button>
              </NavLink>
              <NavLink
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit" sx={{ ml: 1 }}>
                  About
                </Button>
              </NavLink>
              <NavLink
                to="/products"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit" sx={{ ml: 1 }}>
                  Products
                </Button>
              </NavLink>
              <NavLink
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit" sx={{ ml: 1 }}>
                  Contact
                </Button>
              </NavLink>
              {user?.email ? (
                <Box>
                  {!admin ? (
                    <NavLink
                      to="/dashboard/myOrders"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Button color="inherit" sx={{ ml: 1 }}>
                        Dashboard
                      </Button>
                    </NavLink>
                  ) : (
                    <NavLink
                      to="/dashboard/manageOrders"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Button color="inherit" sx={{ ml: 1 }}>
                        Dashboard
                      </Button>
                    </NavLink>
                  )}
                  <Button
                    onClick={logout}
                    color="inherit"
                    sx={{ ml: 3 }}
                    variant="outlined"
                  >
                    <LogoutIcon sx={{ mr: 1 }}></LogoutIcon>
                    Logout
                  </Button>
                </Box>
              ) : (
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Button color="inherit" sx={{ ml: 5 }} variant="outlined">
                    <LoginIcon sx={{ mr: 1 }}></LoginIcon>
                    Login
                  </Button>
                </NavLink>
              )}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

import React, { useState } from "react";
import {
  Alert,
  CircularProgress,
  Container,
  Divider,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import login from "../../../images/form.png";
import GoogleIcon from "@mui/icons-material/Google";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            sx={{
              m: "auto",
              display: "grid",
              placeItems: "center",
              textAlign: "center",
            }}
            xs={12}
            md={6}
          >
            <Typography variant="h3" gutterBottom>
              Login
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "100%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                  variant="standard"
                  color="success"
                />
                <TextField
                  sx={{ width: "100%", m: 1 }}
                  id="standard-basic"
                  label="Your Password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  variant="standard"
                  color="success"
                />

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    sx={{ width: "50%", m: 1, backgroundColor: "green" }}
                    type="submit"
                    variant="contained"
                  >
                    Login
                  </Button>
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "auto",
                  }}
                >
                  {user?.email && (
                    <Alert style={{ fontWeight: "900" }} severity="success">
                      Login Successfully!!!
                    </Alert>
                  )}
                  {authError && (
                    <Alert style={{ fontWeight: "900" }} severity="error">
                      {authError}
                    </Alert>
                  )}
                </div>
                <br />
                <NavLink style={{ textDecoration: "none" }} to="/register">
                  <Button variant="text" sx={{ color: "green" }}>
                    New User? Please Register
                  </Button>
                </NavLink>
                <br />
                <Divider></Divider>
                <Divider></Divider>
                <br />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    onClick={handleGoogleSignIn}
                    variant="contained"
                    sx={{ width: "100%", backgroundColor: "green" }}
                  >
                    <GoogleIcon sx={{ mr: 2 }} /> SIGN IN WITH GOOGLE
                  </Button>
                </div>
              </form>
            )}
            {isLoading && <CircularProgress color="success" />}
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "90%", position: "relative", top: "-12px" }}
              src={login}
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;

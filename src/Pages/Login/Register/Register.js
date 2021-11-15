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
import { NavLink, useHistory, useLocation } from "react-router-dom";
import login from "../../../images/form.png";
import GoogleIcon from "@mui/icons-material/Google";
import useAuth from "./../../../Hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError, signInWithGoogle } =
    useAuth();

  const history = useHistory();
  const location = useLocation();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password Didn't match");
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
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
              p: 5,
            }}
            xs={12}
            md={6}
          >
            <Typography variant="h3" gutterBottom>
              Register
            </Typography>

            {!isLoading && (
              <form onSubmit={handleRegisterSubmit}>
                <TextField
                  sx={{ width: "100%", m: 1 }}
                  id="standard-basic"
                  label="Enter Name"
                  name="name"
                  type="text"
                  onBlur={handleOnBlur}
                  variant="standard"
                  color="success"
                />
                <TextField
                  sx={{ width: "100%", m: 1 }}
                  id="standard-basic"
                  label="Enter Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                  variant="standard"
                  color="success"
                />
                <TextField
                  sx={{ width: "100%", m: 1 }}
                  id="standard-basic"
                  label="Enter Password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  variant="standard"
                  color="success"
                />
                <TextField
                  sx={{ width: "100%", m: 1 }}
                  id="standard-basic"
                  label="Re-Enter Password"
                  type="password"
                  name="password2"
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
                    Register
                  </Button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "auto",
                  }}
                >
                  {user?.email && (
                    <Alert style={{ fontWeight: "900" }} severity="success">
                      Registered Successfully!!!
                    </Alert>
                  )}
                  {authError && (
                    <Alert style={{ fontWeight: "900" }} severity="error">
                      {authError}
                    </Alert>
                  )}
                </div>
                <br />
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text" sx={{ color: "green" }}>
                    Have Account? Please Login
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
                    sx={{ width: "75%", backgroundColor: "green" }}
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

export default Register;

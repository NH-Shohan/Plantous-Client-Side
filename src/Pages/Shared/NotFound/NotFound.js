import React from "react";
import notFound from "../../../images/404.gif";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ backgroundColor: "white", textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
          position: "relative",
          top: "-10px",
        }}
      >
        <img src={notFound} alt="" />
      </div>
      <NavLink to="/home" style={{ textDecoration: "none", color: "white" }}>
        <Button
          sx={{ width: "20%", m: 1, backgroundColor: "green", mb: "50px" }}
          type="submit"
          variant="contained"
        >
          Go Back To Home
        </Button>
      </NavLink>
    </div>
  );
};

export default NotFound;

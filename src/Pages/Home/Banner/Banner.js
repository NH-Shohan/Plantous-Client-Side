import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import banner from "../../../images/home.png";
import { Container } from "@mui/material";

const Banner = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ m: "auto", textAlign: "center" }}>
            <h1
              style={{
                fontSize: "80px",
                lineHeight: "75px",
                color: "#515B60",
              }}
            >
              <span
                style={{
                  fontSize: "80px",
                  color: "#2E7D32",
                }}
              >
                Plant
              </span>
              <br /> To Breathe
            </h1>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              A plant is a grand teacher. It teaches patience and careful
              watchfulness; it teaches industry and thrift; above all, it
              teaches entire trust
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ width: "100%" }} src={banner} alt="" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Banner;

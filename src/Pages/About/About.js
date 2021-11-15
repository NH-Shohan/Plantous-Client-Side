import React from "react";
import image from "../../images/about.png";
import { Container, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import MapIcon from "@mui/icons-material/Map";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <>
      <Container sx={{ textAlign: "center", my: 5 }}>
        <Grid>
          <Typography variant="h2" sx={{ mt: 5, py: 5, fontWeight: "700" }}>
            About Us
          </Typography>
          <Divider></Divider>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <img style={{ width: "100%" }} src={image} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
              <h1>
                WE ARE NOT JUST A TEAM
                <br />
                <span style={{ color: "green" }}>WE ARE FAMILY</span>
              </h1>
              <Divider></Divider>
              <h3 style={{ lineHeight: "40px", textAlign: "justify" }}>
                Seasonality and support of our local community are central to
                our philosophy at plantous. We’re passionate about plantin with
                local, seasonal plants and love how they can inspire our mind.
                Not only do fresh, in-season ingredients enhance flavour, they
                are also great for you and their consumption minimises impact on
                the environment.
              </h3>
            </Grid>
          </Grid>
        </Grid>

        {/* BRANCHES */}

        <Grid>
          <div>
            <h1 className="fs-1 mt-5 ">BRANCHES</h1>
            <Divider></Divider>
            <Divider></Divider>
          </div>
          <br />
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <MapIcon sx={{ color: "green", fontSize: "70px" }} />
              <h3>PLANTOUS GULSHAN</h3>
              <h4>
                103 North Loundoun Street., Winchester, VA
                <br />
                +63 9202740366
              </h4>
            </Grid>
            <Grid item xs={12} md={6}>
              <MapIcon sx={{ color: "green", fontSize: "70px" }} />
              <h3>PLANTOUS OLD DHAKA</h3>
              <h4>
                Lake House, 13 Hanway Square, London, England
                <br />
                +38 7648592568
              </h4>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;

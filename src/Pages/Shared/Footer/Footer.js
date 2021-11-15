import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import footerImage from "../../../images/footer.png";
import { Container, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div style={{ textAlign: "center", backgroundColor: "lightgreen" }}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img style={{ width: "100%" }} src={footerImage} alt="" />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <h2>Opening Hours</h2>
                  <Divider></Divider>
                  <div className="text-start">
                    <p>Monday ----------------- 8.00 - 20.00</p>
                    <p>Tuesda ------------------ 8.00 - 20.00</p>
                    <p>Wednesday ------------- 8.00 - 20.00</p>
                    <p>Thursday ---------------- 8.00 - 20.00</p>
                    <p>Friday ------------------- 8.00 - 20.00</p>
                    <p>Saturday ---------------- 8.00 - 20.00</p>
                    <p>Sunday ----------------- closed</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <h2>About Food Zonous</h2>
                  <Divider></Divider>
                  <BusinessIcon />
                  <h5>21/3 Soi Saladaeng 1, Silom road, New York, USA</h5>
                  <PhoneIcon />
                  <h5>515-708-9386</h5>
                  <EmailIcon />
                  <h5>deliveyinfo@foodzonous.com</h5>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider></Divider>
          <div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <h5 style={{ fontWeight: "900" }}>
                    COPYRIGHT © 2021 ALL RIGHT RESERVED
                  </h5>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs style={{ margin: "auto" }}>
                  <GoogleIcon style={{ width: "20%", fontSize: "40px" }} />
                  <FacebookIcon style={{ width: "20%", fontSize: "40px" }} />
                  <InstagramIcon style={{ width: "20%", fontSize: "40px" }} />
                  <TwitterIcon style={{ width: "20%", fontSize: "40px" }} />
                </Grid>
              </Grid>
            </Box>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;

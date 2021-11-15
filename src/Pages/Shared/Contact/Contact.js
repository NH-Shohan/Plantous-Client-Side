import React from "react";
import { Container, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import contact from "../../../images/contact.png";

const Contact = () => {
  return (
    <Container sx={{ mt: 5, pt: 5 }}>
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
            Contact Us
          </Typography>
          <form>
            <TextField
              sx={{ width: "100%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              variant="filled"
              color="success"
            />
            <TextField
              sx={{ width: "100%", m: 1 }}
              id="standard-basic"
              label="Your message"
              type="text"
              name="message"
              variant="filled"
              color="success"
              multiline
              rows={4}
            />

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{ width: "50%", m: 1, backgroundColor: "green", mt: 3 }}
                type="submit"
                variant="contained"
              >
                Send
              </Button>
            </div>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "90%", position: "relative", top: "-12px" }}
            src={contact}
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;

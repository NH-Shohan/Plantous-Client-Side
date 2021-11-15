import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Alert, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const user = { email };

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    fetch("https://plantous-server.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h3" paragraph>
        Make <span style={{ color: "green" }}>Admin</span>
      </Typography>
      <div
        style={{
          width: "250px",
          margin: "auto",
          textAlign: "right",
        }}
      >
        {success && (
          <Alert
            style={{
              fontWeight: "900",
            }}
            severity="success"
          >
            Made Admin Successfully!!!
          </Alert>
        )}
      </div>
      <form
        style={{ width: "60%", margin: "auto" }}
        onSubmit={handleAdminSubmit}
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={9}>
            <TextField
              sx={{ width: "100%", my: 3 }}
              id="standard-basic"
              label="Admin Email"
              name="email"
              onBlur={handleOnBlur}
              variant="filled"
              color="success"
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{ width: "100%", height: "55px", my: 3 }}
                type="submit"
                variant="outlined"
                color="success"
              >
                Make Admin
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default MakeAdmin;

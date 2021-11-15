import React, { useState } from "react";
import { Alert, CircularProgress, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import purchase from "../../../images/purchase.png";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Stack from "@mui/material/Stack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useParams } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { NavLink } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid green",
  borderRadius: "15px",
  boxShadow: 24,
  textAlign: "center",
  p: 4,
};

const Purchase = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [date, setDate] = React.useState(new Date());
  const { productName, productPrice } = useParams();
  const { user, isLoading } = useAuth();
  const initialInfo = {
    reddit: user.displayName,
    email: user.email,
    phone: "",
    address: "",
    price: productPrice,
  };
  const [orderInfo, setOrderInfo] = useState(initialInfo);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...orderInfo };
    newInfo[field] = value;
    setOrderInfo(newInfo);
  };

  const handelPurchaseProduct = (e) => {
    const order = {
      ...orderInfo,
      productName,
      date: date.toLocaleDateString(),
    };

    // sending to server
    fetch("https://plantous-server.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setOrderSuccess(true);
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <Container
        sx={{
          height: "100%",
        }}
      >
        {isLoading && <CircularProgress color="success" />}
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
              Order for <span style={{ color: "green" }}>{productName}</span>
            </Typography>

            {orderSuccess && (
              <div>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  BackdropProps={{
                    style: {
                      backgroundColor: "#FFFFFF01",
                      backdropFilter: "blur(1px)",
                    },
                  }}
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      <Alert style={{ fontWeight: "900" }} severity="success">
                        Order Received Successfully!!!
                      </Alert>
                      <NavLink
                        to="/products"
                        style={{
                          textDecoration: "none",
                          color: "green",
                          fontSize: "16px",
                        }}
                      >
                        <Button
                          sx={{ margin: "10px", width: "40%", p: "10px" }}
                          variant="contained"
                          color="success"
                        >
                          Okay
                        </Button>
                      </NavLink>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            )}

            {!isLoading && (
              <form onSubmit={handelPurchaseProduct}>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <TextField
                      sx={{ width: "95%", m: 1 }}
                      id="filled-size-small"
                      label="Name"
                      defaultValue={user.displayName}
                      name="reddit"
                      onBlur={handleOnBlur}
                      variant="filled"
                      color="success"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      sx={{ width: "95%", m: 1 }}
                      id="filled-size-small"
                      label="Email"
                      defaultValue={user.email}
                      name="email"
                      onBlur={handleOnBlur}
                      variant="filled"
                      color="success"
                      required
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <TextField
                      sx={{ width: "95%", m: 1 }}
                      id="standard-basic"
                      label="Address"
                      name="address"
                      onBlur={handleOnBlur}
                      variant="filled"
                      color="success"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      sx={{ width: "95%", m: 1 }}
                      id="standard-basic"
                      label="Phone Number"
                      name="phone"
                      onBlur={handleOnBlur}
                      variant="filled"
                      color="success"
                      required
                    />
                  </Grid>
                </Grid>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack
                    spacing={3}
                    sx={{
                      width: "95%",
                      mx: 1.5,
                      my: 1,
                    }}
                  >
                    <DatePicker
                      disablePast
                      label="Order Date"
                      openTo="year"
                      views={["year", "month", "day"]}
                      value={date}
                      onChange={(newValue) => {
                        setDate(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
                <TextField
                  sx={{ width: "95%", m: 1 }}
                  id="standard-basic"
                  label={`Any instruction for your ${productName}`}
                  type="text"
                  name="message"
                  onBlur={handleOnBlur}
                  variant="filled"
                  color="success"
                  multiline
                  rows={3}
                />

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    sx={{
                      width: "95%",
                      m: 1,
                      backgroundColor: "green",
                      mt: 3,
                    }}
                    onClick={handleOpen}
                    type="submit"
                    variant="contained"
                  >
                    <ShoppingCartIcon />
                    CONFIRM ORDER
                  </Button>
                </div>
                <br />
              </form>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "90%", position: "relative", top: "-12px" }}
              src={purchase}
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Purchase;

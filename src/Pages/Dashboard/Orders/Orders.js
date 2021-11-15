import React, { useEffect, useState } from "react";
import useAuth from "./../../../Hooks/useAuth";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Alert, Divider, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const url = `https://plantous-server.herokuapp.com/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data.orders));
  }, [user.email]);

  // delete an order
  const handleDeleteOrder = (id) => {
    const url = `https://plantous-server.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          <Alert style={{ fontWeight: "900" }} severity="success">
            Order Deleted Successfully!!!
          </Alert>;
          const remainingOrders = orders.filter((order) => order._id !== id);
          setOrders(remainingOrders);
        }
      });
  };

  return (
    <div>
      <Typography variant="h3" paragraph>
        My <span style={{ color: "green" }}>Orders</span>
      </Typography>
      <Typography variant="h4" paragraph>
        Product Ordered: <span style={{ color: "green" }}>{orders.length}</span>
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 6, md: 12 }}
        sx={{ margin: "20px" }}
        xs={12}
        sm={12}
        md={12}
      >
        {orders.map((order) => (
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} key={order._id}>
              <Card
                sx={{
                  maxHeight: "auto",
                  width: "auto",
                  border: 0,
                  boxShadow: 0,
                  textAlign: "center",
                  p: 1,
                }}
              >
                <div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    BackdropProps={{
                      style: {
                        backgroundColor: "#FFFFFF01",
                        backdropFilter: "blur(1px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        minWidth: "350px",
                        width: "auto",
                        bgcolor: "#FFF4E5",
                        borderRadius: "15px",
                        border: "2px solid #F06360",
                        boxShadow: "none",
                        p: 4,
                      }}
                    >
                      <Alert
                        style={{ fontWeight: "900", fontSize: "17px" }}
                        severity="warning"
                      >
                        Delete the Order!!!
                      </Alert>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{
                          color: "saddlebrown",
                          ml: "20px",
                          fontWeight: "900",
                        }}
                      >
                        Are you sure???
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mt: 1,
                        }}
                      >
                        <Button
                          sx={{ margin: "10px", width: "40%", p: "10px" }}
                          variant="contained"
                          color="success"
                          onClick={handleClose}
                        >
                          cancel
                        </Button>
                        <Button
                          sx={{ margin: "10px", width: "40%", p: "10px" }}
                          variant="contained"
                          color="error"
                          onClick={() => {
                            handleDeleteOrder(selectedId);
                            handleClose();
                          }}
                        >
                          delete
                        </Button>
                      </Box>
                    </Box>
                  </Modal>
                </div>
                <CardContent sx={{ textAlign: "left" }}>
                  <Typography variant="h5" component="div">
                    Name: {order.reddit}
                  </Typography>
                  <Divider></Divider>
                  <Divider></Divider>
                  <Typography variant="p" color="text.dark">
                    Email&emsp;&emsp;&emsp;&ensp;: {order.email}
                  </Typography>
                  <Divider></Divider>
                  <Divider></Divider>
                  <Typography variant="p" color="text.dark">
                    Number&emsp;&emsp;&nbsp;&nbsp;: {order.phone}
                  </Typography>
                  <Divider></Divider>
                  <Divider></Divider>
                  <Typography variant="p" color="text.dark">
                    Address&emsp;&emsp;&nbsp;: {order.address}
                  </Typography>
                  <Divider></Divider>
                  <Divider></Divider>
                  <Typography variant="p" color="text.dark">
                    Product&emsp;&emsp;&ensp;: {order.productName}
                  </Typography>
                  <Divider></Divider>
                  <Divider></Divider>
                  <Typography variant="p" color="text.dark">
                    Ordered Date: {order.date}
                  </Typography>
                  <Divider></Divider>
                  <Divider></Divider>
                  <Typography variant="h6" color="text.dark">
                    Price: ${order.price}
                  </Typography>
                </CardContent>
                <Typography
                  variant="p"
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    fontWeight: "400",
                    borderRadius: "10px",
                    py: 0.5,
                    px: 1,
                    m: "auto",
                  }}
                >
                  Status:&ensp;{order.status ? order.status : "Pending"}
                </Typography>
                <Button
                  sx={{
                    width: "80%",
                    fontWeight: "900",
                    fontSize: "16px",
                    py: 1,
                    mt: 1.5,
                  }}
                  onClick={() => {
                    handleOpen();
                    setSelectedId(order._id);
                  }}
                  variant="outlined"
                  color="error"
                >
                  Cancel Product
                </Button>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Orders;

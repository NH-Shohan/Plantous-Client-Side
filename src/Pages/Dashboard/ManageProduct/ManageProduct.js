import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Alert, Container, Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Divider } from "@mui/material";
import Paper from "@mui/material/Paper";

const ManageProduct = (props) => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch("https://plantous-server.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // DELETE PRODUCT
  const handleDeleteOrder = (id) => {
    const url = `https://plantous-server.herokuapp.com/products/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          <Alert style={{ fontWeight: "900" }} severity="success">
            Product Deleted Successfully!!!
          </Alert>;
          const remainingProduct = products.filter((order) => order._id !== id);
          setProducts(remainingProduct);
        }
      });
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <Container>
        <Typography variant="h3" paragraph>
          Manage <span style={{ color: "green" }}>Products</span>
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ margin: "20px" }}
          sm={6}
          md={12}
        >
          {products.map((product) => (
            <Grid item xs={3} sm={5} md={4}>
              <Paper elevation={3}>
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
                  <CardMedia
                    component="img"
                    style={{
                      width: "150px",
                      height: "150px",
                      margin: "0 auto",
                      borderRadius: "50%",
                    }}
                    image={product.image}
                    alt=""
                  />
                  <CardContent sx={{ textAlign: "justify" }}>
                    <Typography variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Divider></Divider>
                    <Divider></Divider>
                    <Typography variant="p" color="text.secondary">
                      {product.desc}
                    </Typography>
                    <br />
                    <br />
                    <Divider></Divider>
                    <Divider></Divider>
                    <Typography variant="h6" color="text.dark">
                      Price: ${product.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{
                        width: "100%",
                        m: 1,
                        backgroundColor: "red",
                      }}
                      type="submit"
                      variant="contained"
                      onClick={() => {
                        handleOpen();
                        setSelectedId(product._id);
                      }}
                    >
                      <ShoppingCartIcon />
                      DELETE PRODUCT
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
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
                Delete the product!!!
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
      </Container>
    </Box>
  );
};

export default ManageProduct;

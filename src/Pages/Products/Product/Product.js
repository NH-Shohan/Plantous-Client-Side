import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import PurchaseModal from "../PurchaseModal/PurchaseModal";

const Product = ({ product }) => {
  const { name, desc, image, price } = product;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid item xs={12} sm={5} md={4}>
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
              image={image}
              alt=""
            />
            <CardContent sx={{ textAlign: "justify" }}>
              <Typography variant="h5" component="div">
                {name}
              </Typography>
              <Divider></Divider>
              <Divider></Divider>
              <Typography variant="p" color="text.secondary">
                {desc}
              </Typography>
              <br />
              <br />
              <Divider></Divider>
              <Divider></Divider>
              <Typography variant="h6" color="text.dark">
                Price: ${price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                sx={{
                  width: "100%",
                  m: 1,
                  backgroundColor: "green",
                }}
                type="submit"
                variant="contained"
                onClick={handleOpen}
              >
                <ShoppingCartIcon />
                PURCHASE
              </Button>
            </CardActions>
          </Card>
        </Paper>
      </Grid>
      <PurchaseModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        product={product}
      ></PurchaseModal>
    </>
  );
};

export default Product;

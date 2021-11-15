import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "800px",
  bgcolor: "background.paper",
  border: "2px solid green",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function PurchaseModal({
  open,
  handleOpen,
  handleClose,
  product,
}) {
  const { name, desc, image, price } = product;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        BackdropProps={{
          style: {
            backgroundColor: "#FFFFFF01",
            backdropFilter: "blur(1px)",
          },
        }}
      >
        <Box
          sx={{
            ...style,
            width: "60%",
            maxHeight: "90vh",
            borderRadius: "20px",
            overflow: "auto",
            overflowY: "scroll",
            scrollbarWidth: "1px",
            scrollbarColor: "#777 #555",
          }}
        >
          <Grid container sm={12} spacing={5}>
            <Grid item xs={4} sm={8} md={6}>
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={image}
                alt=""
              />
            </Grid>

            <Grid item xs={5} sm={8} md={6}>
              <Typography
                id="parent-modal-title"
                variant="h3"
                sx={{ py: "10px" }}
              >
                {name}
              </Typography>
              <Divider></Divider>
              <Divider></Divider>
              <Divider></Divider>
              <Typography
                id="parent-modal-description"
                variant="h6"
                sx={{ py: "10px", textAlign: "justify" }}
              >
                {desc}
              </Typography>
              <Divider></Divider>
              <Divider></Divider>
              <Divider></Divider>
              <Typography variant="h5" sx={{ py: "15px" }}>
                price: ${price}
              </Typography>
              <NavLink
                to={`/purchase/${name}/${price}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{
                    width: "100%",
                    my: "10px",
                    backgroundColor: "green",
                    fontSize: "20px",
                  }}
                  type="submit"
                  variant="contained"
                  onClick={handleOpen}
                >
                  <ShoppingCartIcon />
                  PURCHASE
                </Button>
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

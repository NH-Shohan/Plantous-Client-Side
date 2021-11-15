import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Product from "./../Product/Product";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const { view } = props;

  useEffect(() => {
    fetch("https://plantous-server.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (view === 3) {
          setProducts(data.slice(0, 6));
        } else {
          setProducts(data);
        }
      });
  }, [view]);

  return (
    <Box sx={{ flexGrow: 1, my: 5, textAlign: "center" }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, m: 2, color: "success.main" }}
          variant="h2"
          component="div"
        >
          OUR PRODUCTS
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
            <Product key={product._id} product={product}></Product>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;

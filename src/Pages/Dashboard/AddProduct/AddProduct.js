import React from "react";
import axios from "axios";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmitEvent = (data) => {
    axios
      .post("https://plantous-server.herokuapp.com/addProducts", data)
      .then((res) => {
        alert("Product Added Successfully!!!");
        reset();
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h3" paragraph>
        Add <span style={{ color: "green" }}>Product</span>
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <br />
        <form
          style={{ width: "60%" }}
          action=""
          onSubmit={handleSubmit(onSubmitEvent)}
        >
          <TextField
            {...register("name")}
            sx={{ width: "100%", m: 1 }}
            id="standard-basic"
            label="Product Name"
            type="text"
            name="name"
            variant="filled"
            color="success"
            required
          />
          <TextField
            {...register("price")}
            sx={{ width: "100%", m: 1 }}
            id="standard-basic"
            label="Product Price"
            type="number"
            name="price"
            variant="filled"
            color="success"
            required
          />
          <TextField
            {...register("image")}
            sx={{ width: "100%", m: 1 }}
            id="standard-basic"
            label="Product Thumbnail Link"
            name="image"
            variant="filled"
            color="success"
            required
          />
          <TextField
            {...register("desc")}
            sx={{ width: "100%", m: 1 }}
            id="standard-basic"
            label="Product Description"
            type="text"
            name="desc"
            variant="filled"
            color="success"
            required
            multiline
            rows={4}
          />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{ width: "50%", m: 1, backgroundColor: "green", mt: 3 }}
              type="submit"
              variant="contained"
            >
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

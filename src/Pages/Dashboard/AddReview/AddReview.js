import React from "react";
import axios from "axios";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmitEvent = (data) => {
    axios
      .post("https://plantous-server.herokuapp.com/addReview", data)
      .then((res) => {
        alert("Review Added Successfully!!!");
        reset();
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h3" paragraph>
        Your <span style={{ color: "green" }}>Review</span>
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <br />
        <form
          style={{ width: "60%" }}
          action=""
          onSubmit={handleSubmit(onSubmitEvent)}
        >
          <TextField
            {...register("image")}
            sx={{ width: "100%", m: 1 }}
            id="standard-basic"
            label="Your Image URL Link"
            name="image"
            variant="filled"
            color="success"
            required
          />
          <TextField
            {...register("name")}
            sx={{ width: "100%", m: 1 }}
            id="standard-basic"
            label="Your Name"
            type="text"
            name="name"
            variant="filled"
            color="success"
            required
          />
          <TextField
            {...register("reviewDesc")}
            sx={{ width: "100%", m: 1 }}
            id="standard-basic"
            label="Review Description"
            type="text"
            name="reviewDesc"
            variant="filled"
            color="success"
            required
            multiline
            rows={4}
          />
          <TextField
            {...register("rating")}
            sx={{ width: "100%", m: 1 }}
            id="standard-basic"
            label="Review Rating"
            type="number"
            name="rating"
            variant="filled"
            color="success"
            required
          />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{ width: "50%", m: 1, backgroundColor: "green", mt: 3 }}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;

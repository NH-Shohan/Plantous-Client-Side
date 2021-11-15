import React from "react";
import About from "../../About/About";
import Banner from "../Banner/Banner";
import Products from "../../Products/Products/Products";
import Review from "./../../Shared/Review/Review";
import Contact from "../../Shared/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Products view={3}></Products>
      <Review></Review>
      <Contact></Contact>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Review.css";
import image from "../../../images/review.png";
import { Paper, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
SwiperCore.use([Autoplay]);

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://plantous-server.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="container">
      <div className="title_wrapper">
        <Typography variant="h4">
          What People <span style={{ color: "green" }}>Says About Us</span>
        </Typography>
      </div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide>
            <Paper
              elevation={3}
              sx={{ textAlign: "justify", p: 3, height: "400px" }}
            >
              <div>
                <img
                  style={{
                    width: "160px",
                    height: "160px",
                    backgroundColor: "lightgreen",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                  src={review.image}
                  alt=""
                />
                <h3>{review.name}</h3>
                <p>{review.reviewDesc}</p>
              </div>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read size-large"
                  defaultValue={review.rating}
                  precision={0.5}
                  size="large"
                  readOnly
                />
              </Stack>
            </Paper>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <Paper elevation={3} sx={{ textAlign: "justify", p: 3 }}>
            <div>
              <img
                style={{
                  width: "160px",
                  backgroundColor: "lightgreen",
                  borderRadius: "50%",
                  margin: "auto",
                }}
                src={image}
                alt=""
              />
              <h3>Shohan</h3>
              <p>
                My original spider plant died and I emailed The Plant Shop and
                they sent me a new spider plant right away. The plants look
                beautiful and beautiful.
              </p>
            </div>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={4}
                precision={0.5}
                readOnly
              />
            </Stack>
          </Paper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;

import React from "react";
import Carousel from "framer-motion-carousel";
import './Reviews.css';

const reviews = [
  
  {
    author: "John Doe",
    date: "May 23, 2078",
    comment: "The food is great for your health and it provides all the nutrients required for your body",
    rating: 4,
    image: "https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2019/09/psych-311-247-300x238.jpg"
  },
  {
    author: "John Doe",
    date: "May 23, 2078",
    comment: "The food is great for your health and it provides all the nutrients required for your body",
    rating: 4,
    image: "https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2019/09/psych-311-247-300x238.jpg"
  },
  {
    author: "John Doe",
    date: "May 23, 2078",
    comment: "The food is great for your health and it provides all the nutrients required for your body",
    rating: 4,
    image: "https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2019/09/psych-311-247-300x238.jpg"
  },
  {
    author: "John Doe",
    date: "May 23, 2078",
    comment: "The food is great for your health and it provides all the nutrients required for your body",
    rating: 4,
    image: "https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2019/09/psych-311-247-300x238.jpg"
  },
  {
    author: "John Doe",
    date: "May 23, 2078",
    comment: "The food is great for your health and it provides all the nutrients required for your body",
    rating: 4,
    image: "https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2019/09/psych-311-247-300x238.jpg"
  },
  {
    author: "John Doe",
    date: "May 23, 2078",
    comment: "The food is great for your health and it provides all the nutrients required for your body",
    rating: 4,
    image: "https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2019/09/psych-311-247-300x238.jpg"
  },
  // Add more review objects as needed
];

const Reviews = () => (
    <div className="containerR">
    <Carousel renderDots={false} interval={5000}>
      {reviews.map((review, i) => (
        <div className="slide" key={i}>
          <img className="slide-image" src={review.image} alt="img" />
          <div className="slide-content">
            <div className="slide-author">{review.author}</div>
            <div className="slide-date">{review.date}</div>
            <div className="slide-comment">{review.comment}</div>
            <div className="slide-rating">
              Rating: <span>{"\u2605".repeat(review.rating)}</span>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default Reviews;

import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="/">
          <img src="images/slider-badging.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="images/slider-scales.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;

// const Carousel = styled(Slider)`
//   margin-top: 20px;

//   & > button {
//     opacity: 0;
//     height: 100%;
//     width: 5vw;
//     z-index: 1;

//     &:hover {
//       opacity: 1;
//       transition: opacity 0.2s ease;
//     }
//   }
//   ul li button {
//     &:before {
//       font-size: 10px;
//       color: rgb(150, 158, 171);
//     }
//   }
//   li.slick-active button:before {
//     color: white;
//   }
//   .slick-list {
//     overflow: initial;
//   }
// `;

// const Wrap = styled.div`
//   border-radius: 4px;
//   cursor: pointer;
//   position: relative;

//   a {
//     border-radius: 4px;
//     box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
//       rgb(0 0 0 / 73%) 0px 16px 10px -10px;
//     cursor: pointer;
//     display: block;
//     position: relative;
//     padding: 4px;

//     img {
//       width: 100%;
//       height: 100%;
//     }

//     &:hover {
//       padding: 0;
//       border: 5px solid rgba(249, 249, 249, 0.8);
//       transition-duration: 300ms;
//     }
//   }
// `;
const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease;
    }
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./SimpleCarousel.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },

  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },

  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Crousal = () => {
  return (
    <Carousel responsive={responsive} className="carousel">
      <div style={{ borderRadius: "1rem" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51nZgW7t2VZVaCb0M1CUJVbLvjhGX9tAvAw&usqp=CAU"
          width={300}
          height={185}
          alt=""
          className="carousel-img"
        />
        <div className="blore-image"></div>
        <div>.</div>
        <div className="carousel-content">
          <h1 className="carousel-p">Ravens beat 49ers, 3...</h1>
          <p className="carousel-p">[Schefter] After Monday night's 33-19...</p>
        </div>
      </div>

      <div style={{ borderRadius: "1rem" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOvzWunjG-UZXIOACmVXdEx69u3VbbwAtOKg&usqp=CAU"
          width={300}
          height={185}
          alt=""
          className="carousel-img"
        />
        <div className="blore-image"></div>
        <div>.</div>
        <div className="carousel-content">
          <h1 className="carousel-p">US Apple Watch Sale...</h1>
          <p className="carousel-p">
            Apple is now banned for selling its lat...
          </p>
        </div>
      </div>

      <div style={{ borderRadius: "1rem" }}>
        <img
          src="https://th-i.thgim.com/public/incoming/a4ovva/article66378094.ece/alternates/FREE_1200/PTI01_14_2023_000089A.jpg"
          width={300}
          height={185}
          alt=""
          className="carousel-img"
        />
        <div className="blore-image"></div>
        <div>.</div>
        <div className="carousel-content">
          <h1 className="carousel-p">IIHF World Junior C...</h1>
          <p className="carousel-p">
            The arena hosting the World Juniors thi...
          </p>
        </div>
      </div>

      <div style={{ borderRadius: "1rem" }}>
        <img
          src="https://a.espncdn.com/photo/2023/0601/r1180993_1296x1296_1-1.jpg"
          width={300}
          height={185}
          alt=""
          className="carousel-img"
        />
        <div className="blore-image"></div>
        <div>.</div>
        <div className="carousel-content">
          <h1 className="carousel-p">Premier League...</h1>
          <p className="carousel-p">
            [Premier League] The position of every...
          </p>
        </div>
      </div>
      <div style={{ borderRadius: "1rem" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-LJ3t9skpnZf79LsRXBrPLA3vDujbmwUIrA&usqp=CAU"
          width={300}
          height={185}
          alt=""
          className="carousel-img"
        />
        <div className="blore-image"></div>
        <div>.</div>
        <div className="carousel-content">
          <h1 className="carousel-p">Images of Joker must...</h1>
          <p className="carousel-p">New Images of Joaquin Phoenix & Lady...</p>
        </div>
      </div>
      <div style={{ borderRadius: "1rem" }}>
        <img
          src="https://www.thestatesman.com/wp-content/uploads/2023/12/kamar-de-los-reyes.jpg"
          width={300}
          height={185}
          alt=""
          className="carousel-img"
        />
        <div className="blore-image"></div>
        <div>.</div>
        <div className="carousel-content">
          <h1 className="carousel-p">Kamar De Los Reyes...</h1>
          <p className="carousel-p">Kamar De Rayes Dies:'One Life To...</p>
        </div>
      </div>
    </Carousel>
  );
};

export default Crousal;

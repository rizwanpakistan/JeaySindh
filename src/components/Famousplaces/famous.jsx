import { Link } from "react-router-dom"; // Import Link
import Places from "./famousPlaceData";
import Slider from "react-slick";
import "./famousPlaceData.css";
import { motion } from "framer-motion";
motion;
function FamousPlaces() {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    speed: 500,
    // dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
    ],
  };
  return (
    <div className="slider-container famousSlider">
      <div className="container-fluid">
        <h1 className="famoush1">سنڌ جو قدرتي حسن</h1>
        <Slider {...settings}>
          {Places.map((place) => {
            return (
              <div key={place.id} className="slider-item p-2">
                <img
                  src={place.image}
                  alt={place.title}
                  className="slider-image famousSliderImg rounded"
                />

                <div className="slider-content">
                  <h6 className="IndexH1">{place.title}</h6>

                  <p className="shortDescription">
                    {place.description}
                    <Link to={`/place/${place.id}`}>
                      <span className="seemoreLink">...وڌيڪ ڏسو</span>
                    </Link>
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default FamousPlaces;

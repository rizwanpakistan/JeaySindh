import Slider from "react-slick";
import Place from "./historicalPlacedata";
import "./historical.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function HistoricalPlaces() {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,

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
    <div className="Slider-container HistoricalSlider">
      <div className="container-fluid">
        <h1 className="Historicalh1">سنڌ جا تاريخي خزانا</h1>
        <Slider {...settings}>
          {Place.map((place) => {
            return (
              <div key={place.id} className="slider-item p-2">
                <img
                  src={place.image}
                  alt={place.title}
                  className="slider-image HistoricalSliderImg rounded"
                />
                <div className="slider-content">
                  <h6 className="NatureIndexH1">{place.title}</h6>

                  <p className="shortDescription">
                    {place.description}
                    <Link to={`/Historical/ ${place.id}`}>
                      <span>...وڌيڪ ڏسو</span>
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
export default HistoricalPlaces;

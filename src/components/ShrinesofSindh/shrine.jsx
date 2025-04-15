import ShrinesData from "./shrinedata";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./shrine.css";

function ShrinePlace() {
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
    <div className="slider-container ShrineSliderContainer">
      <div className="container-fluid">
        <h1 className="Shrineh1">سنڌ جون روحاني جڳهيون</h1>
        <Slider {...settings}>
          {ShrinesData.map((shrine) => {
            return (
              <div key={shrine.id} className="slider-item p-2">
                <img
                  src={shrine.image}
                  alt={shrine.title}
                  className="slider-image ShrineSliderImg rounded "
                />
                <div className="slider-content">
                  <h6 className="ShrineIndex">{shrine.title}</h6>
                  <p className="shortdescriptionShrine">
                    {shrine.description}
                    <Link to={`/Shrine/${shrine.id}`}>
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
export default ShrinePlace;

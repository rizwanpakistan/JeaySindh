import Slider from "react-slick";
import Food from "./Sindhifooddata";
import "./sindhifood.css";
import { motion } from "framer-motion";
function SindhiFood() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <div className="slider-container container slidercontainerFood">
      <h1 className="foodh1">سنڌي رواجي کاڌا</h1>
      <Slider {...settings}>
        {Food.map((food) => {
          return (
            <motion.div
              key={food.id}
              className="slider-item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1 }}
            >
              <img
                src={food.image}
                alt={food.title}
                className="foodtImg rounded"
              />
              <div className="sliderContentFood">
                <h1>{food.title}</h1>
              </div>
            </motion.div>
          );
        })}
      </Slider>
    </div>
  );
}
export default SindhiFood;

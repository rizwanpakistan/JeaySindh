import heroImg from "../../assets/images/ajrak.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import "./Hero.css";
function Hero() {
  return (
    <>
      <div className="hero-section">
        <img src={heroImg} alt="Ajrak Image" />
        <div className="overlay"></div>
        <div className="body">
          <TypeAnimation
            sequence={[
              "ڀليڪار آهي اوهان کي سنڌ جي حسين ڌرتيءَ تي", // Text to type
              1000, // Wait after typing
            ]}
            wrapper="h1"
            speed={50}
            className="heroh1"
            repeat={1} // Run only once
          />
          {/* <h1 className="heroh1">Welcome to the beautiful land of Sindh</h1> */}
          <motion.p
            className="heroP"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            سنڌ: جتي روايتون، محبت ۽ تاريخ هڪٻئي سان جُڙيل آهن
          </motion.p>
          <Link to="/More-Detail">
            <motion.button
              type="submit"
              className="herobtn "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              سنڌ جي تاريخ
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Hero;

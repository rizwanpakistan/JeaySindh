import GalleryImg from "./galleryImg";
import "./gallery.css";
import LightGallery from "lightgallery/react";
import { motion } from "framer-motion";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

function SindhiCultureGallery() {
  return (
    <div className="galleryBg">
      <div className="container my-5 p-3">
        <h1 className=" mb-4 sindhGallery fs-1">سنڌ جا رنگ</h1>

        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          download={true}
          zoomFromOrigin={true}
          hideBarsDelay={1000}
          selector="a"
        >
          <motion.div
            className="row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            {GalleryImg.map((img) => (
              <div
                className="col-lg-2 col-md-3 col-sm-4 col-4 mb-4"
                key={img.id}
              >
                <a href={img.image}>
                  <img
                    src={img.image}
                    alt={`Culture ${img.id}`}
                    className="img-fluid rounded shadow"
                    style={{
                      height: "150px", // 👈 Fixed height
                      width: "100%",
                      objectFit: "cover", // 👈 Prevent layout breaking
                    }}
                  />
                </a>
              </div>
            ))}
          </motion.div>
        </LightGallery>
      </div>
    </div>
  );
}

export default SindhiCultureGallery;

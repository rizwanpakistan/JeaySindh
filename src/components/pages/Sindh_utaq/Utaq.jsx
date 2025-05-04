import SindhUtaqSlider from "./UtaqData";
import Utaq from "./UtaqDataSindh";
import "./Utaq.css";
///
import LightGallery from "lightgallery/react";
import { motion } from "framer-motion";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
function SindhUtaq() {
  return (
    <div className="container utaqContainer">
      <h1 className="fs-1 text-center mt-1 mb-1 p-4">
        جتي اوطاقون آباد، اتي دلون آباد
      </h1>
      {Utaq.map((utaqitem) => {
        return (
          <div className="row mb-5" key={utaqitem.id}>
            <div className="col-lg-6 col-md-12 col-12 p-3">
              <img src={utaqitem.img} alt={utaqitem.img} className="UtaqImg" />
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <p className="fs-5 utaqDescriptipn text-end p-1">
                {utaqitem.description}
              </p>
            </div>
          </div>
        );
      })}
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        download={true}
        zoomFromOrigin={true}
        hideBarsDelay={1000}
        selector="a"
      >
        <div className="row">
          {SindhUtaqSlider.map((galleryitem) => {
            return (
              <div
                className="col-lg-2 col-md-3 col-sm-4 col-4 mb-4"
                key={galleryitem.id}
              >
                <a href={galleryitem.img}>
                  <img
                    src={galleryitem.img}
                    alt={`Culture ${galleryitem.id}`}
                    className="img-fluid rounded shadow"
                    style={{
                      height: "100px", // 👈 Fixed height
                      width: "100%",
                      objectFit: "cover", // 👈 Prevent layout breaking
                    }}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </LightGallery>
    </div>
  );
}
export default SindhUtaq;

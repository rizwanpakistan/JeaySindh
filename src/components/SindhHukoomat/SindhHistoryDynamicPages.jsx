import React from "react";
import { useParams } from "react-router-dom";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

// LightGallery CSS
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Gallery JSON
import SindhHistoryGallery from "./SindhOldDynamicGallery";

function SindhHistoryDynamicPage() {
  const { id } = useParams();
  const matchedGallery = SindhHistoryGallery.find(
    (gallery) => gallery.id === parseInt(id)
  );

  if (!matchedGallery) {
    return <p className="text-center mt-5">Gallery not found</p>;
  }

  return (
    <div className="container">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        zoomFromOrigin={true}
        download={false}
        selector="a"
      >
        <div className="row" style={{ marginTop: "120px" }}>
          <h2 className=" text-end fs-1 mb-5" style={{ color: "red" }}>
            مھرباني ڪري ڪجھ ٽائم کان بعد ڪوشش ڪندا ويب سائيٽ تي مواد شامل ڪرڻ جو
            ڪم جاري آھي
          </h2>
          {matchedGallery.title && (
            <h3 className="text-center mb-4 fs-3">{matchedGallery.title}</h3>
          )}
          {matchedGallery.images.map((img, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
              <a href={img} data-src={img}>
                <img
                  src={img}
                  alt={index + 1}
                  className="rounded img-fluid shadow d-block mx-auto"
                  style={{
                    height: "240px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </LightGallery>
    </div>
  );
}

export default SindhHistoryDynamicPage;

import Love from "./SindhiLoveData";
import "./Love.css";
function SindhLoveStory() {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <h1 className="lovecontainertitle fs-1">
            سنڌ جي امر محبتن جا داستان
          </h1>
          {Love.map((loveItam) => {
            return (
              <div
                key={loveItam.id}
                className="col-lg-3 col-md-4 col-sm-12 LoveCols mb-3"
              >
                <img
                  src={loveItam.img}
                  alt={loveItam.title}
                  className="SindhLoveImg"
                />
                <div className="LoveOverlay">
                  <h1 className="Lovetitle">{loveItam.title}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default SindhLoveStory;

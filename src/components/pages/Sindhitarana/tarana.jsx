import SindhuTarana from "./taranaData";
function SindhiQomiTarana() {
  return (
    <div className="container p-2">
      {SindhuTarana.map((Sindhu) => {
        return (
          <div className="row mt-5">
            <div key={Sindhu.id} className="col-12 text-center mt-5 mb-4">
              <img
                className="mt-1"
                src={Sindhu.img}
                alt="Sindhi Tarana"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="col-12">
              <video src={Sindhu.vid} controls autoPlay unmuted width="100%" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default SindhiQomiTarana;

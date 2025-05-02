import SindhAgricultureData from "./AgricultureData";
import SindhLeader from "../../Leaders/leaderData";
import "./Agrilculture.css";
function SindhAgriculture() {
  return (
    <div className="container AgrilCultureContainer">
      <div className="row">
        {SindhAgricultureData.map((data) => {
          return (
            <div className="col-12" key={data.id}>
              <img src={data.img} alt={data.img} className="AgricultureImg" />
              <div className="AgricultureData">
                <h1 className="fs-1 AgriCultureh1">{data.title}</h1>
                <p className="fs-5 AgriCulturep">{data.description}</p>
              </div>
            </div>
          );
        })}

        <p className="fs-2 text-end mt-3">تحرير : دادا سنڌي</p>
      </div>
    </div>
  );
}
export default SindhAgriculture;

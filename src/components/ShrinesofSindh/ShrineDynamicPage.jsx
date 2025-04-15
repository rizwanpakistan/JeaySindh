import ShrineDynamicData from "./ShrineDynamicData";
import { useParams } from "react-router-dom";

function ShrineDynamicPageData() {
  const { id } = useParams();
  const data = ShrineDynamicData.find((item) => item.id === parseInt(id));
  if (!data) {
    return (
      <h1>
        Sorry!!
        <br />
        Not found data
      </h1>
    );
  }
  return (
    <div key={data.id}>
      <img src={data.img} alt={data.img} className="shrineDynaamicPageImg" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="">
              <h1 className="dataheading">{data.title}</h1>
              <div className="Data_centent">
                <p
                  className="Data_cententP"
                  dangerouslySetInnerHTML={{ __html: data.longDescription }}
                ></p>
              </div>
              <div className="video">
                <p dangerouslySetInnerHTML={{ __html: data.documentry }}></p>
              </div>
              <div
                className="mapLocation"
                dangerouslySetInnerHTML={{ __html: data.map }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShrineDynamicPageData;

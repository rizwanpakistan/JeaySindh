import { useParams } from "react-router-dom";
import HistoricalData from "./dynamicHistoricalData";
function DynamicHistoricalPage() {
  const { id } = useParams();
  const data = HistoricalData.find((item) => item.id === parseInt(id));
  if (!data) {
    return (
      <h1>
        Sorry!!
        <br />
        Page not found
      </h1>
    );
  }
  return (
    <div key={data.id}>
      <img src={data.img} alt={data.img} className="historicalImgDynamicPage" />
      <div className="container">
        <div className="row">
          <dov className="col-12">
            <h1 className="dataheading">{data.title}</h1>
            <div className="Data_content">
              <p
                className="Data_contantP"
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
          </dov>
        </div>
      </div>
    </div>
  );
}

export default DynamicHistoricalPage;

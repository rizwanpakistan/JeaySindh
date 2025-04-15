import FullData from "./famousdynamicData.jsx";
import { useParams } from "react-router-dom";

function DynamicPageFamousData() {
  const { id } = useParams(); // Access the unique ID from the URL
  const data = FullData.find((item) => item.id === parseInt(id)); // Find data by unique ID

  if (!data) {
    return <h1>Sorry! Page not found</h1>;
  }

  return (
    <div key={data.id}>
      <img className="dataImg" src={data.img} alt={data.img} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="dataheading">{data.title}</h1>

            <div className="Data_content">
              <p
                className="Data_contentP"
                dangerouslySetInnerHTML={{ __html: data.longDescription }}
              ></p>
            </div>
            <div className="video">
              <p dangerouslySetInnerHTML={{ __html: data.documentry }}></p>
            </div>
            <div className="mapLocation">
              <p
                className="map"
                dangerouslySetInnerHTML={{ __html: data.map }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicPageFamousData;

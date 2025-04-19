import SindhLeader from "./LeaderJsonData";
import { useParams } from "react-router-dom";
function SindhBraveLeader() {
  const { id } = useParams();
  const data = SindhLeader.find((item) => item.id === parseInt(id));
  if (!data) {
    return <h1>Sorry!! page not found</h1>;
  }
  return (
    <div key={data.id}>
      <div className="container text-end">
        <div className="row mt-5">
          <div className="col-12 mt-5">
            <h1 className="mt-3 mb-3 fs-1">{data.title}</h1>
            <p
              className="fs-4"
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></p>
            <div
              className="mt-2"
              dangerouslySetInnerHTML={{ __html: data.documentry }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SindhBraveLeader;

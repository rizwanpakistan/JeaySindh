import DocumentrySindh from "./documentFile";
import "./documentry.css";
function Documentry() {
  return (
    <div className="container-fluid">
      <div className="row">
        {DocumentrySindh.map((item_card) => {
          return (
            <div
              className="col-lg-3 col-md-4 col-sm-12 mt-2 mb-2 CardBox"
              key={item_card.id}
            >
              <div
                className="documentry mt-2"
                dangerouslySetInnerHTML={{ __html: item_card.video }}
              ></div>
              <div className="card-body text pt-1 mb-3 mx-3">
                <p className="card-text">{item_card.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Documentry;

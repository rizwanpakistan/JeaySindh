import sindhPoets from "./PoetsData";
import "./Poets.css";
function SindhPoetPage() {
  return (
    <div className="mainPage">
      <div className="container mt-5 pt-4">
        <div className="row mt-5">
          {sindhPoets.map((PoetsItem) => {
            const collapseId = `flush-collapse-${PoetsItem.id}`;
            const headingId = `flush-heading-${PoetsItem.id}`;

            return (
              <div key={PoetsItem.id} className="col-12">
                <div
                  className="accordion accordion-flush mb-3 "
                  id={`accordionFlush-${PoetsItem.id}`}
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id={headingId}>
                      <button
                        className="accordion-button collapsed shadow"
                        type="button "
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded="false"
                        aria-controls={collapseId}
                      >
                        <h4 className=" w-100 text-center">
                          {PoetsItem.title}
                        </h4>
                      </button>
                    </h2>
                    <div
                      id={collapseId}
                      className="accordion-collapse collapse"
                      aria-labelledby={headingId}
                      data-bs-parent={`#accordionFlush-${PoetsItem.id}`}
                    >
                      <div className="accordion-body">
                        <img
                          src={PoetsItem.image}
                          alt={PoetsItem.title}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default SindhPoetPage;

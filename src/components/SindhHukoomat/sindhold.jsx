import dynasstiesData from "./Sindholddata";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./SindhOld.css";
function SindhHistory() {
  return (
    <div className="container">
      <div className="row flex-row-reverse">
        <h1 className="mb-4 SindhOldH1 text-end">سنڌ جي تاريخ</h1>

        {dynasstiesData.map((dataitem) => {
          return (
            <motion.div
              className="col-lg-3 col-md-6 col-sm-12 mb-4 ImgBox"
              key={dataitem.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1 }}
            >
              <Link to={`/sin/${dataitem.id}`}>
                <img
                  src={dataitem.img}
                  alt={dataitem.title}
                  className="SindhRulerImg "
                />

                <div className="SindhOverlay">
                  <h1 className="fs-1 SindhOverlayh1">{dataitem.title}</h1>
                  <p className="fs-4 mt-3">{dataitem.period}</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
export default SindhHistory;

import SindhLeader from "./leaderData";
import { motion } from "framer-motion";
import "./leader.css";
function Leaders() {
  return (
    <div className="container mainContainer">
      <div className="row">
        {SindhLeader.map((dataitem) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-12">
              <motion.div
                key={dataitem.id}
                className="card LeaderCard"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={dataitem.img}
                  alt={dataitem.img}
                  className="leaderImg"
                />
                <div class="card-body text-center">
                  <h5 class="card-title titleh5">{dataitem.title}</h5>
                  <button type="button" className="LeaderBtn">
                    وڌيڪ ڄاڻو
                  </button>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Leaders;

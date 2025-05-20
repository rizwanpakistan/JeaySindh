import { useNavigate } from "react-router-dom";
import SindhuDeshTaran from "../../../assets/images/SindhDeshTaranaFlag.mp4";
import "./about.css";
function About() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container px-0">
        <div className="row">
          <div className="col-12">
            <video
              src={SindhuDeshTaran}
              controls
              autoPlay
              unmuted
              width="100%"
              className=""
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mainRow">
          <div className="col-12">
            <h1 className="Abouth1 fs-1">سنڌ جي شاندار ثقافت ۽ تاريخ</h1>
          </div>
        </div>
        <div className="row middlerow ">
          <div className="col-lg-6 col-md-12 col-sm-12, col-12">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/j_I9dgMmkNU?si=RPkYG3V7hwxJG98y"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          {/* 2nd col */}
          <div className="col-lg-6 col-md-12 col-sm-12, col-12 descriptionCol">
            <p className="description fs-4 p-2">
              انساني ارتقا جي پس پرده محرڪن ۾ معيشت هڪ اهم محرڪ آهي. انسان جي
              ترقي، سماجي نظام، سماجي تبديلي، معاشي وسيلن جي تبديلي، ڏينهن رات
              اڳتي وڌڻ واري جنون انسان کي هن منزل تي پهچايو. دنيا جي ٻين ملڪن
              وانگر سنڌ به سماجي، تمدني ۽ سياسي پهلوئن ۾ پنهنجي مخصوص معاشي
              حالتن موجب انقلابي اثر قبول ڪندي رهي آهي ۽ اڄ، ورهين/ ايامن جي اٿل
              پٿل ۽ تبديلين جو نتيجو آهي
            </p>
            <button
              type="Submit"
              className="buttonDescription"
              onClick={() => navigate("/سنڌ جو تعارف")}
            >
              وڌيڪ ڏسو
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

import { useNavigate } from "react-router-dom";
import "./about.css";
function About() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row mainRow">
          <div className="col-12">
            <h1 className="Abouth1">سنڌ جي شاندار ثقافت ۽ تاريخ</h1>
          </div>
        </div>
        <div className="row middlerow">
          <div className="col-lg-6 col-md-12 col-sm-12, col-12">
            <iframe
              width="100%"
              height="350"
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
            <p className="description">
              انساني ارتقا جي پس پرده محرڪن ۾ معيشت هڪ اهم محرڪ آهي. انسان جي
              ترقي، سماجي نظام، سماجي تبديلي، معاشي وسيلن جي تبديلي، ڏينهن رات
              اڳتي وڌڻ واري جنون انسان کي هن منزل تي پهچايو. دنيا جي ٻين ملڪن
              وانگر سنڌ به سماجي، تمدني ۽ سياسي پهلوئن ۾ پنهنجي مخصوص معاشي
              حالتن موجب انقلابي اثر قبول ڪندي رهي آهي ۽ اڄ، ورهين/ ايامن جي اٿل
              پٿل ۽ تبديلين جو نتيجو آهي
              <br />
              اقتصادي حوالي سان سنڌ شروع کان وٺي هڪ خوشحال ملڪ رهيو آهي، جنهن جي
              شاهدي اڄ به ڪيترائي حوالا ۽ ماخذ ڏين ٿا، پر سنڌ جي مڪمل اقتصادي
              ترقي يا ڍانچي تي ڪو مستند مواد نه سهيڙيو ويو آهي ۽ نه ئي ڪا جامع
              تاريخ موجود آهي، جيتوڻيڪ تاريخ جا ماهر هر سماجي وارتا جو محرڪ
              معاشي مفاد ئي ڄاڻائين ٿا ۽ سنڌ تي ٿيندڙ مسلسل ڪاهون يا حملا به ان
              ڳالهه جي گواهي آهن ته سنڌ معاشي حوالي سان هڪ خوشحال ملڪ رهيو آهي
            </p>
            <button
              type="Submit"
              className="buttonDescription"
              onClick={() => navigate("/more-detail")}
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

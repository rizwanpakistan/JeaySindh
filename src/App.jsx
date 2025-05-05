import Navbar from "./components/navbar/navbar.jsx";
import SindhiQomiTarana from "./components/pages/Sindhitarana/tarana.jsx";
import SindhAgriculture from "./components/pages/SindhAgriculture/Agriculture.jsx";
import SindhUtaq from "./components/pages/Sindh_utaq/Utaq.jsx";
import Hero from "./components/Hero/Hero.jsx";
import { Routes, Route, Router } from "react-router-dom";
///
import About from "./components/pages/About/About.jsx";
import More_Detail from "./components/pages/About/MoreDetail.jsx";
///
import SindhHistory from "./components/SindhHukoomat/sindhold.jsx";
///
import SindhLoveStory from "./components/SindhLove/SindhLoveStory.jsx";
///
import Documentry from "./components/documenrySindh/document.jsx";
///
import FamousPlaces from "./components/Famousplaces/famous.jsx";
///
import HistoricalPlaces from "./components/historicalPlace/historicalPlace.jsx";
///
import ShrinePlace from "./components/ShrinesofSindh/shrine.jsx";
///
import SindhiFood from "./components/Sindhifood/Sindhifood.jsx";
///
import SindhiCultureGallery from "./components/gallery/gallery.jsx";
/// just check demo
import DynamicPageFamousData from "./components/Famousplaces/famousdynamicPage.jsx";
///
import DynamicHistoricalPage from "./components/historicalPlace/dynamicHistoricalPages.jsx";
import ShrineDynamicPageData from "./components/ShrinesofSindh/ShrineDynamicPage.jsx";
/////
import Leaders from "./components/Leaders/leader.jsx";
import SindhBraveLeader from "./components/Leaders/SindhLeaderData.jsx";
//
import Footer from "./components/Footer/footer.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />

              <About />
              <SindhHistory />
              <SindhLoveStory />
              <Documentry />
              <FamousPlaces />
              <HistoricalPlaces />
              <ShrinePlace />
              <Leaders />
              <SindhiFood />
              <SindhiCultureGallery />
            </>
          }
        />
        <Route path="/سنڌ جو قومي ترانو" element={<SindhiQomiTarana />} />
        <Route path="/زراعت" element={<SindhAgriculture />} />
        <Route path="/اوطاق" element={<SindhUtaq />} />
        <Route path="/سنڌ جو تعارف" element={<More_Detail />} />
        <Route path="/سنڌ جو تعارف" element={<More_Detail />} />
        <Route path="/place/:id" element={<DynamicPageFamousData />} />
        <Route path="/Historical/:id" element={<DynamicHistoricalPage />} />
        <Route path="/Shrine/:id" element={<ShrineDynamicPageData />} />
        <Route path="/Sindh_leader/:id" element={<SindhBraveLeader />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;

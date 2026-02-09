import HeroSection from "../components/HeroSection";
import Map from "../components/MapTemp";
import Cards from "../components/Cards";
function HomePage() {
  return (
     <><HeroSection images={[
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-Meet-Model-Y-Desktop-EMEA.jpg",
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Hero-Model-3-Standard-Desktop-EMEA.jpg"
    ]} />
    <Cards></Cards>
    <Map />
    </>

  );
}
export default HomePage;

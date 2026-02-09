import HeroSection from "../components/HeroSection";
import Map from "../components/Map";
function HomePage() {
  return (
     <><HeroSection images={[
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-Meet-Model-Y-Desktop-EMEA.jpg",
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Hero-Model-3-Standard-Desktop-EMEA.jpg"
    ]} /><Map />
    </>
mv src/components/Map.tsx src/components/MapTemp.tsx
  );
}
export default HomePage;

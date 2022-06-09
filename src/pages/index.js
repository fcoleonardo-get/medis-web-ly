
import NavHome from "../Views/components/Navbar"
import CardsHome from "../Views/components/CardsHome";
import MapaCalor from "../Views/MapasCalor/Mapas";
import Footer from "../Views/components/Footer";
import FooterBar from "../Views/components/FooterBar";
import Background from "../Views/components/Background";


export default function Home() {
  return (
  <div>
    <NavHome />
    <Background>
      <CardsHome />
      <MapaCalor />
    </Background>
    <FooterBar />
  </div>)
}

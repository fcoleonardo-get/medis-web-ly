import NavBar from "../Views/components/Navbar";
import Background from "../Views/components/Background";
import HistoricoPage from "../Views/Historico/Historico";

export default function Historico() {
  return (
    <div>
      <NavBar />
      <Background>
        <HistoricoPage />
      </Background>
    </div>
  )
}

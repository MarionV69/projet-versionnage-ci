import ecoA from "../assets/eco-A.avif";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <div className="footer-eco">
            <img src={ecoA} alt="Classe énergétique A" className="eco-image" />
          </div>
          <div className="footer-info">
            <p>Pensez à covoiturer</p>
            <p>#SeDéplacerMoinsPolluer</p>
          </div>
        </div>

        <nav className="footer-links" aria-label="Liens du pied de page">
          <a href="#">Tesla © 2026</a>
          <a href="#">Mentions légales</a>
          <a href="#">Contact</a>
          <a href="#">Actualités</a>
          <a href="#">Recevoir nos actualités</a>
          <a href="#">Localisations</a>
          <a href="#">Découvrir</a>
        </nav>
      </div>
    </footer>
  );
}
export default Footer;

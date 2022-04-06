// Footer Component

// Local Imports
import './footer.scss';

const Footer = () => (
  <footer>
    <div className="contact">
      <h2 className="footer-title">Contact</h2>
      <p className="contact__infos">Tomates & Potirons</p>
      <p className="contact__infos">14 rue xxxxxxxxxx</p>
      <p className="contact__infos">12345 Poitiers</p>
      <p className="contact__infos">tomates&potirons@gmail.com</p>
      <p className="contact__infos">06 09 45 34 34</p>
    </div>
    <div className="navigation">
      <h2 className="footer-title">Navigation</h2>
      <a href="#">Accueil</a>
      <a href="#">Vente Direct</a>
      <a href="#">AMAP</a>
      <a href="#">Nos Partenaires</a>
      <a href="#">Vos Maraîchers</a>
      <a href="#">Notre Agriculture</a>
    </div>
    <div className="other">
      <h2>Nos Réseaux</h2>
    </div>
  </footer>
);

export default Footer;

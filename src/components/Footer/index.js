// Footer Component

// Local Imports
import './footer.scss';

// NPM Imports
import FeatherIcon from 'feather-icons-react';

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
      <a href="#" className="footer-links">Accueil</a>
      <a href="#" className="footer-links">Vente Direct</a>
      <a href="#" className="footer-links">AMAP</a>
      <a href="#" className="footer-links">Nos Partenaires</a>
      <a href="#" className="footer-links">Vos Maraîchers</a>
      <a href="#" className="footer-links">Notre Agriculture</a>
    </div>
    <div className="other">
      <div className="socials">
        <h2 className="footer-title">Nos Réseaux</h2>
        <a href="https://www.facebook.com/tomatesetpotirons" target="_blank" rel="noreferrer">
          <FeatherIcon icon="facebook" className="socials__links" />
        </a>
        <a href="https://instagram.com/tomates_et_potirons?utm_medium=copy_link" target="_blank" rel="noreferrer">
          <FeatherIcon icon="instagram" className="socials__links" />
        </a>
      </div>
      <div className="legals">
        <h2 className="footer-title">Legals</h2>
        <a href="#" className="footer-links">Conditions Générales d'utilisation</a>
        <a href="#" className="footer-links">Mentions Légales</a>
      </div>
    </div>
  </footer>
);

export default Footer;

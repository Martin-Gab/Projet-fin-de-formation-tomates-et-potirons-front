// Footer Component

// Local Imports
import './footer.scss';

// Packages Imports
import { Facebook, Instagram } from 'react-feather';
import { NavLink } from 'react-router-dom';

// Data content Import
import { contentFooterContact } from 'src/data/content';

const Footer = () => (
  <footer>
    <div className="contact">
      <h2 className="footer-title">Contact</h2>
      {contentFooterContact.map((item) => (
        <p className="contact__infos">{item}</p>
      ))}
    </div>
    <div className="navigation">
      <h2 className="footer-title">Navigation</h2>
      <NavLink to="/" className="footer-links">Accueil</NavLink>
      <NavLink to="/nos-activites/vente-direct" className="footer-links">Vente Direct</NavLink>
      <NavLink to="/nos-activites/amap" className="footer-links">AMAP</NavLink>
      <NavLink to="/nos-activites/nos-partenaires" className="footer-links">Nos Partenaires</NavLink>
      <NavLink to="/vos-maraichers" className="footer-links">Vos Maraîchers</NavLink>
      <NavLink to="/notre-agriculture" className="footer-links">Notre Agriculture</NavLink>
    </div>
    <div className="other">
      <div className="socials">
        <h2 className="footer-title">Nos Réseaux</h2>
        <a href="https://www.facebook.com/tomatesetpotirons" target="_blank" rel="noreferrer">
          <Facebook size={36} className="socials__links" />
        </a>
        <a href="https://instagram.com/tomates_et_potirons?utm_medium=copy_link" target="_blank" rel="noreferrer">
          <Instagram size={36} className="socials__links" />
        </a>
      </div>
      <div className="legals">
        <h2 className="footer-title">Legals</h2>
        <NavLink to="/conditions" className="footer-links">Conditions Générales d'utilisation</NavLink>
        <NavLink to="/mentions-legales" className="footer-links">Mentions Légales</NavLink>
      </div>
    </div>
  </footer>
);

export default Footer;

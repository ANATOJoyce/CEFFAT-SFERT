import './footer.css';

const Footer = () => {
  return (
    <footer>

      <div className="footer-container">

        {/* NAVIGATION */}
        <div className="footer-column">
          <h4>Navigation</h4>
          <a href="/#home">Home</a>
          <a href="/#about">About</a>
          <a href="/#services">Services</a>
          <a href="/#members">Members</a>
          <a href="/#contact">Contact</a>
        </div>

        {/* INFOS */}
        <div className="footer-column">
          <h4>Infos</h4>
          <a href="/#">Production</a>
          <a href="/#">Transformation</a>
          <a href="/#">Exportation</a>
          <a href="/#">Qualité</a>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h4>Contact</h4>
          <a href="mailto:contact@cefaat-sfer.com">Email</a>
          <a href="tel:+22890000000">Téléphone</a>
          <a href="/#">Localisation</a>
        </div>

      </div>
      
      <p className="footer-bottom">
        © 2024 CEFAAT SFER. Tous droits réservés.
      </p>

    </footer>
  );
};

export default Footer;
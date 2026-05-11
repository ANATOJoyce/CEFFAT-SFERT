import './contact.css';
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Contact = () => {
  return (
    <section id="contact" className="info-section-contact">

      <h2>Contact</h2>

      <div className="contact-container">

        {/* INFOS */}
        <div className="social-container">

          <div className="card">
            <div className="icon"><FaWhatsapp /></div>
            <h3>WhatsApp</h3>
            <p>+228 90 00 00 00</p>
            <a href="https://wa.me/22890000000" target="_blank" rel="noreferrer">
              Contacter
            </a>
          </div>

          <div className="card">
            <div className="icon"><FaFacebook /></div>
            <h3>Facebook</h3>
            <p>@monsite</p>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Voir page
            </a>
          </div>

          <div className="card">
            <div className="icon"><FaTwitter /></div>
            <h3>Twitter</h3>
            <p>@monsite</p>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Voir profil
            </a>
          </div>

          <div className="card">
            <div className="icon"><FaInstagram /></div>
            <h3>Instagram</h3>
            <p>@monsite</p>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Voir profil
            </a>
          </div>
        </div>
    
      </div>

          <div className='Partenaire-message'>
            <h1>" INVESTIR EN CEFAAT SFERT "</h1>
            <h2>" INVESTIR DANS VOTRE AVENIR "</h2>
            <a href="https://wa.me/22890000000" target="_blank" rel="noreferrer">
              INVESTIR
            </a>
          </div>

    </section>
  );
};

export default Contact;
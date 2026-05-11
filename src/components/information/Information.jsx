import './information.css';
import planet from '../../assets/images/planet.png';
import farmers from '../../assets/images/farmers.jpg';
import membre from '../../assets/images/membre.jpg';
import {
  FaMapMarkedAlt,
  FaHandshake,
  FaIndustry,
  FaShip,
  FaSeedling,
  FaPepperHot,
  FaLeaf,
  FaOilCan,
  FaAppleAlt
} from 'react-icons/fa';

const Information = () => {
  return (
    <div className="information">
      <section className="info-section">

        {/* MODELES */}
        <h2>Nos <span>modèles</span>  intégrés</h2>
        <div className="about-content" id="Modele">

          <div className="card-about">
            <div className="info-icon">
              <FaMapMarkedAlt size={100} />
            </div>
            <p>Sécurisation foncière</p>
            <small>200 000 ha sécurisés</small>
          </div>

          <div className="card-about">
            <div className="info-icon">
              <FaHandshake size={100} />
            </div>
            <p>Production contractuelle</p>
            <small>Coopératives encadrées</small>
          </div>

          <div className="card-about">
            <div className="info-icon">
              <FaIndustry size={100} />
            </div>
            <p>Transformation</p>
            <small>Normes ISO & HACCP</small>
          </div>

          <div className="card-about">
            <div className="info-icon">
              <FaShip size={100} />
            </div>
            <p>Export</p>
            <small>FOB Lomé / CIF</small>
          </div>

        </div>

        {/* FILIERES */}
        <h2>Nos <span>filières</span>  agricoles</h2>
        <div className="about-content filieres" id="Filieres">

          <div className="card-about">
            <div className="info-icon">
              <FaSeedling size={60} />
            </div>
            <p>Céréales & légumineuses</p>
            <small>Maïs, riz, sorgho, mil, soja, arachide</small>
          </div>

          <div className="card-about">
            <div className="info-icon">
              <FaPepperHot size={60} />
            </div>
            <p>Épices & aromates</p>
            <small>Gingembre, ail, oignon, piment, curcuma, basilic</small>
          </div>

          <div className="card-about">
            <div className="info-icon">
              <FaLeaf size={60} />
            </div>
            <p>Plantes médicinales</p>
            <small>Moringa, noni, neem, citronnelle, spiruline</small>
          </div>

          <div className="card-about">
            <div className="info-icon">
              <FaOilCan size={60} />
            </div>
            <p>Oléagineux & agroforesterie</p>
            <small>Jatropha, pongamia, hévéa, acacia</small>
          </div>

          <div className="card-about">
            <div className="info-icon">
              <FaAppleAlt size={60} />
            </div>
            <p>Fruits & vivriers</p>
            <small>Banane plantain, ananas, mangue, agrumes</small>
          </div>

        </div>

        {/* EQUIPE */}
       <h2>
          Une <span>équipe</span> formée d’experts
        </h2>

        <div className="about-content equipe" id="Equipe">

          <div className="card img-card">
            <img src={membre} alt="Equipe" />
          </div>

          <div className="card img-card">
            <img src={membre} alt="Equipe" />
          </div>

          <div className="card img-card">
            <img src={membre} alt="Equipe" />
          </div>

          <div className="card img-card">
            <img src={membre} alt="Equipe" />
          </div>

          <div className="card img-card">
            <img src={membre} alt="Equipe" />
          </div>

          <div className="card img-card">
            <img src={membre} alt="Equipe" />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Information;
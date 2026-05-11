import {
  FaMapMarkedAlt,
  FaQrcode,
  FaFlask,
  FaShip,
  FaHandshake,
  FaIndustry,
  FaDatabase,
  FaGlobe,
  FaSeedling,
  FaPepperHot,
  FaLeaf,
  FaOilCan,
  FaAppleAlt,
  FaCalendarAlt,
  FaEnvelope,
  FaPaperPlane
} from "react-icons/fa";
import './performance.css';
const Performance = () => {
  return (
    <div>

      {/* HERO */}
      <section className="hero full-page-section">
        <div className="container hero-content">

          <div className="hero-text">
            <h1>
              CEFAAT–SFER – Plateforme agro-industrielle intégrée
              <span style={{ color: "var(--primary-color)" }}> (Togo)</span>
            </h1>

            <p>
              Producteur, transformateur et exportateur de <strong>plus de 30 cultures</strong>
            </p>

            <div className="hero-stats">
              <div className="stat-item"><FaMapMarkedAlt /> 200 000 ha</div>
              <div className="stat-item"><FaQrcode /> OBENS</div>
              <div className="stat-item"><FaFlask /> ITRA & ICAT</div>
              <div className="stat-item"><FaShip /> Port de Lomé</div>
            </div>

            <a href="#contact" className="btn-primary">
              Devenir partenaire
            </a>
          </div>

          <div className="hero-img">
            <img
              src={"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000"}
              alt=""
            />
          </div>

        </div>
      </section>

      {/* MODEL */}
      <section className="bg-light">
        <div className="container">

          <h2 className="section-title">Notre modèle intégré</h2>

          <div className="pillars-grid">

            <div className="pillar-card">
              <FaMapMarkedAlt className="pillar-icon" />
              <h3>Sécurisation foncière</h3>
              <p>200 000 ha sécurisés</p>
            </div>

            <div className="pillar-card">
              <FaHandshake className="pillar-icon" />
              <h3>Production contractuelle</h3>
              <p>Coopératives encadrées</p>
            </div>

            <div className="pillar-card">
              <FaIndustry className="pillar-icon" />
              <h3>Transformation</h3>
              <p>Normes ISO & HACCP</p>
            </div>

            <div className="pillar-card">
              <FaDatabase className="pillar-icon" />
              <h3>Traçabilité</h3>
              <p>OBENS dashboard</p>
            </div>

            <div className="pillar-card">
              <FaGlobe className="pillar-icon" />
              <h3>Gouvernance</h3>
              <p>Partenaire GBV</p>
            </div>

            <div className="pillar-card">
              <FaShip className="pillar-icon" />
              <h3>Export</h3>
              <p>FOB Lomé / CIF</p>
            </div>

          </div>
        </div>
      </section>

      {/* CROPS */}
      <section>
        <div className="container">

          <h2 className="section-title">Nos filières</h2>

          <div className="crop-category"><FaSeedling /> Céréales & légumineuses</div>
          <div className="crop-category"><FaPepperHot /> Épices & aromates</div>
          <div className="crop-category"><FaLeaf /> Plantes médicinales</div>
          <div className="crop-category"><FaOilCan /> Oléagineux</div>
          <div className="crop-category"><FaAppleAlt /> Fruits</div>

          <div className="gallery-grid">
            <img src={"https://images.unsplash.com/photo-1591466402147-8edf175b65d4?w=400"} alt="" />
            <img src={"https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400"} alt="" />
            <img src={"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400"}    alt="" />
          </div>

        </div>
      </section>

      {/* TRACEABILITY */}
      <section className="bg-light">
        <div className="container">
          <h2 className="section-title">Traçabilité OBENS</h2>
          <p>
            De la semence à l’export avec suivi complet et conformité ESG.
          </p>

          <div className="badge">
            <FaQrcode /> Audit en temps réel
          </div>
        </div>
      </section>

      {/* PROCESSING */}
      <section>
        <div className="container">

          <h2 className="section-title">Transformation & logistique</h2>

          <div className="pillars-grid">

            <div className="pillar-card">
              <FaIndustry className="pillar-icon" />
              <h3>SITRAPAT</h3>
              <p>Transformation industrielle</p>
            </div>

            <div className="pillar-card">
              <FaShip className="pillar-icon" />
              <h3>Port de Lomé</h3>
              <p>Export rapide</p>
            </div>

          </div>

        </div>
      </section>

      {/* PILOT */}
      <section className="bg-light">
        <div className="container">
          <h2 className="section-title">Phase pilote</h2>

          <p>1 500 t maïs grits – preuve d’exécution</p>

          <div className="stat-item">
            <FaCalendarAlt /> Juin 2026
          </div>
        </div>
      </section>

      {/* LAND */}
      <section>
        <div className="container">
          <h2 className="section-title">Terres & partenaires</h2>

          <img
            src={"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000"}
            alt=""
            className="full-img"
          />
        </div>
      </section>

   

    </div>
  );
};

export default Performance;
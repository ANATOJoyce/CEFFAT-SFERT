import './service.css';
import planet from '../../assets/images/planet.png';
import { FaMapMarkedAlt, FaQrcode, FaFlask, FaShip } from "react-icons/fa";

const Service = () => {
  return (
    <div className="service" id="home">
      <div className="video-section">

        <div className="planet-animation">
          <img src={planet} alt="planète animée" />
        </div>

        <div className="content">
          <h1><span>CEFAAT</span>  SFER</h1>
          <h3>Plateforme agro-industrielle intégrée <span>(TOGO)</span></h3>
          <p>Plus de 30 cultures agricoles certifiées exploitées</p>

          <div className="hero-stats">
            <div className="stat-item"><FaMapMarkedAlt /> <span>200 000 ha</span></div>
            <div className="stat-item"><FaQrcode /> <span>OBENS</span></div>
            <div className="stat-item"><FaFlask /> <span>ITRA & ICAT</span></div>
            <div className="stat-item"><FaShip /> <span>Port de Lomé</span></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Service;
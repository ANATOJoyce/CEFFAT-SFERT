import './partner.css';

import farmers from '../../assets/images/farmers.jpg';

import planet from '../../assets/images/planet.png';


const Partner = () => {
  return (
    <section id="partners">

      <div id="mirab" className="partners-container">

        {/* TEXTE */}
        <div className="partners-text">

          <h2>Nos Partenaires</h2>

          <h3>ONG MIRAB</h3>

          <p>
            L’ONG MIRAB est un acteur majeur dans le développement des communautés rurales 
            et agricoles.
          </p>

        </div>

        {/* IMAGE */}
        <div className="partners-image">
          <img src={farmers} alt="ONG MIRAB" />
        </div>

      </div>

      {/* SLIDER INFINI */}
      <div className="partners-slider">

        <div className="slide-track">

          {/* logos */}
          <img src={planet} alt="" />
          <img src={planet} alt="" />
          <img src={planet} alt="" />
          <img src={planet} alt="" />

          {/* duplication pour effet infini */}
          <img src={planet} alt="" />
          <img src={planet} alt="" />
          <img src={planet} alt="" />
          <img src={planet} alt="" />

        </div>

      </div>

    </section>
  );
};

export default Partner;
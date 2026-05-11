import './banner.css';

import piment from '../../assets/images/piment.jpeg';
import choux from '../../assets/images/choux.jpeg';
import tomate from '../../assets/images/tomate.jpeg';
import ananas from '../../assets/images/ananas.jpeg';

const Banner = () => {
  const cultures = [
    { titre: "Choux",   image: choux   },
    { titre: "Tomate",  image: tomate  },
    { titre: "Ananas",  image: ananas  },
    { titre: "Piment",  image: piment  },
    { titre: "Piment",  image: piment  },
  ];

  return (
    <div className="banner">
      <section className="hero" id="service">

        <div className="hero-content">
          <h1>Plus de 30 Cultures</h1>
        </div>

        <div className="cultures-grid">
          {cultures.map((culture, index) => (
            <div className="culture-card" key={index}>
              <img src={culture.image} alt={culture.titre} />
              <h2>{culture.titre}</h2>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default Banner;
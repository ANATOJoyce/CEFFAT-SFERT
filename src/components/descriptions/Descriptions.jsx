import './descriptions.css';
import prod from '../../assets/images/prod.png';
import transformation from '../../assets/images/transformation.png';
import exportations from '../../assets/images/exportations.png';

const Descriptions = () => {

  const cards = [
    {
      title: "Production",
      image: prod,
    },
    {
      title: "Transformation",
      image: transformation,
    },
    {
      title: "Exportation",
      image: exportations,
    }
  ];

  return (
    <section className="descriptions">{cards.map((card, index) => (

        <div className="card-descriptions" key={index}>
          <img src={card.image} alt={card.title} />
        </div>

      ))}
    </section>
  );


};

export default Descriptions;
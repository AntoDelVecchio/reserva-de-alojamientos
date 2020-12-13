import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMapMarkerAlt,
    faBed
} from '@fortawesome/free-solid-svg-icons';

function Card(props) {
  const { slug, name, photo, description, rooms, city, country, price } = props; //desconstruccion de objetos

  const maxPrice = 4;
  const getPriceIconsClasses = () => {
    let iconsClasses = [];
    for (let i = 0; i < maxPrice; i++) {
      iconsClasses.push(
        `fas fa-dollar-sign ${i >= price ? "paint-price" : ""}`
      );
    }
    return iconsClasses;
  };

  const priceIconsClasses = getPriceIconsClasses();

  return (
    <article className="cardHotel">
      <img className="imageHotel" src={photo} alt={slug} />
      <div className="info">
        <div className="description">
          <h2 className="card-title">{name}</h2>
          <p className="cardText">{description}</p>
        </div>
        <div className="additional-data">
          <div className="location">
            <div className="icon">
            <FontAwesomeIcon icon={faMapMarkerAlt}/>
            </div>
            <span className="infoTxt">
              {city}, {country}
            </span>
          </div>

          <div className="capacity">
            <div className="icon">
            <FontAwesomeIcon icon={faBed} />
            </div>
            <span className="infoTxt">{rooms} habitaciones</span>
          </div>
          <div className="price-icons">
            {priceIconsClasses.map((classes, i) => (
              <i className={classes} key={i}></i>
            ))}
          </div>
        </div>
      </div>
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          alert(
            "El alojamiento para sus próximas vacaciones felices ha sido reservado con éxito. Wiiii!! Sea feliz y vuelva pronto! :D"
          );
        }}
      >
        Reservar
      </button>
    </article>
  );
}

export default Card;

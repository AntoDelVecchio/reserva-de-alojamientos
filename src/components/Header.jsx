import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSignInAlt,
    faSignOutAlt,
    faGlobe,
    faDollarSign,
    faBed,
    faTrash
} from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
  getDateValue = (date) => {
    if (date === "") {
      return "";
    } else {
      return date.toISOString().substr(0, 10);
    }
  };

  options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  showDateFilters = () => {
    return this.props.availabilityFrom === "" &&
      this.props.availabilityTo === ""
      ? ""
      : `desde ${
          this.props.availabilityFrom &&
          this.props.availabilityFrom.toLocaleDateString("es-ES", this.options)
        } hasta ${
          this.props.availabilityTo &&
          this.props.availabilityTo.toLocaleDateString("es-ES", this.options)
        } `;
  };

  getCountryString = () => {
    return this.props.country === "any" ? "" : ` en ${this.props.country}`;
  };

  getPriceString = () => {
    switch (parseInt(this.props.price, 10)) {
      case 1:
        return " de precio económico";
      case 2:
        return " de precio intermedio";
      case 3:
        return " de precio costoso";
      case 4:
        return " de precio muy costoso";
      default:
        return "";
    }
  };

  getSizeString = () => {
    return this.props.size === "any" ? "" : ` de tamaño ${this.props.size}`;
  };

  render() {
    const {
      handleInput,
      handleDateChange,
      today,
      availabilityFrom,
      availabilityTo,
      country,
      price,
      size,
      filtersReset
    } = this.props;

    return (
      <div className="header">
        <div className="header-title">
          <h1 className="title">Hoteles</h1>
          <p className="date-info">
            {this.showDateFilters()}
            {this.getCountryString()}
            {this.getPriceString()}
            {this.getSizeString()}
          </p>
        </div>
        <div className="barra-filters">
          <form action="" className="filters">
            <div className="input-ctn">
              <FontAwesomeIcon icon={faSignInAlt} className="input-icon"/>
              <input
                type="date"
                id="start"
                name="availabilityFrom"
                value={this.getDateValue(availabilityFrom)}
                min={this.getDateValue(today)}
                onChange={handleDateChange}
              />
            </div>
            <div className="input-ctn">
              <FontAwesomeIcon icon={faSignOutAlt} className="input-icon"/>
              <input
                type="date"
                id="start"
                name="availabilityTo"
                value={this.getDateValue(availabilityTo)}
                min={this.getDateValue(availabilityFrom)}
                onChange={handleDateChange}
              />
            </div>
            <div className="input-ctn">
              <FontAwesomeIcon icon={faGlobe} className="input-icon"/>
              <select
                name="country"
                value={country}
                id=""
                onChange={handleInput}
              >
                <option value="any">Todos los países</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
                <option value="Uruguay">Uruguay</option>
              </select>
            </div>
            <div className="input-ctn">
              <FontAwesomeIcon icon={faDollarSign} className="input-icon"/>
              <select value={price} name="price" id="" onChange={handleInput}>
                <option value="any">Cualquier precio</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
              </select>
            </div>
            <div className="input-ctn">
              <FontAwesomeIcon icon={faBed} className="input-icon"/>
              <select value={size} name="size" id="" onChange={handleInput}>
                <option value="any">Cualquier tamaño</option>
                <option value="pequeño">Hotel pequeño</option>
                <option value="mediano">Hotel mediano</option>
                <option value="grande">Hotel grande</option>
              </select>
            </div>
            <button className="reset-btn" onClick={filtersReset}>
              <FontAwesomeIcon icon={faTrash} className="input-icon"/>
              Limpiar filtros
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Header;

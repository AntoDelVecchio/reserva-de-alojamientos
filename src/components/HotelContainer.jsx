import React from "react";
import Card from "./Card";
import Header from "./Header";
import { hotelsData, today } from "../data";
import EmptyHotels from "./EmptyHotels";

class HotelContainer extends React.Component {
  state = {
    country: "any",
    price: "any",
    size: "any",
    availabilityFrom: "",
    availabilityTo: ""
  };

  handleDateChange = (e) => {
    if (
      e.target.name === "availabilityFrom" &&
      new Date(e.target.value + "T00:00:00-03:00").valueOf() >
        new Date(this.state.availabilityTo).valueOf()
    ) {
      this.setState({
        availabilityFrom: new Date(e.target.value + "T00:00:00-03:00"),
        availabilityTo: new Date(
          this.state.availabilityTo.setDate(
            new Date(e.target.value + "T00:00:00-03:00").getDate() + 1
          )
        )
      });
    } else {
      this.setState({
        [e.target.name]: new Date(e.target.value + "T00:00:00-03:00")
      });
    }
    this.filterCards();
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  doesSizeMatters = (size, state) => {
    switch (state) {
      case "pequeño":
        return size <= 10;
      case "mediano":
        return size > 10 && size <= 20;
      case "grande":
        return size > 20;
      default:
        return false;
    }
  };

  filterCards = () => {
    return hotelsData.filter((hotel) => {
      let countryFilter =
        this.state.country === "any"
          ? true
          : hotel.country === this.state.country;
      let priceFilter =
        this.state.price === "any"
          ? true
          : hotel.price === parseInt(this.state.price, 10);
      let sizeFilter =
        this.state.size === "any" ||
        this.doesSizeMatters(hotel.rooms, this.state.size);
      let dateFilter =
        this.state.availabilityFrom === "" || this.state.availabilityTo === ""
          ? true
          : this.state.availabilityFrom.valueOf() >=
              hotel.availabilityFrom.valueOf() &&
            this.state.availabilityTo.valueOf() <=
              hotel.availabilityTo.valueOf();

      return countryFilter && priceFilter && sizeFilter && dateFilter;
    });
  };

  filtersReset = (e) => {
    e.preventDefault();
    this.setState({
      country: "any",
      size: "any",
      price: "any",
      availabilityFrom: "",
      availabilityTo: ""
    });
  };

  render() {
    const hotels = this.filterCards();
    return (
      <div className="hotel">
        <Header
          handleInput={this.handleInput}
          handleDateChange={this.handleDateChange}
          today={today}
          availabilityFrom={this.state.availabilityFrom}
          availabilityTo={this.state.availabilityTo}
          country={this.state.country}
          price={this.state.price}
          size={this.state.size}
          filtersReset={this.filtersReset}
        />
        <div className="hotels-gallery">
          {hotels.length !== 0 ? (
            hotels.map((hotelData, index) => (
              <Card {...hotelData} key={index} />
            ))
          ) : (
            <EmptyHotels />
          )}
        </div>
      </div>
    );
  }
}

export default HotelContainer;

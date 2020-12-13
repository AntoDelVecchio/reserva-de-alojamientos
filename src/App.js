import React from "react";
import "./styles/styles.scss";
import HotelContainer from "./components/HotelContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HotelContainer />
      </div>
    );
  }
}

export default App;

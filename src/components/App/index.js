import React, { Component } from "react";
import Map from "../Map";
import CountrySelect from "../CountrySelect";
// import Globe from "../Loader";
import axios from "axios";
import { GoSearch } from "react-icons/go";
import * as API from "../../constants/api";
const countries = require("../../countries.json");

console.log("This app is using the following API:\n", API.BASE_PATH);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrData: [["Country", "Indicator"]],
      arrCountry: countries,
      isSelected: false,
      error: false
    };
  }

  setCountryArray = (element, result) => {
    const { arrData } = this.state;
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 3,
      useGrouping: true
    });
    // const value = formatter.format(Number(result.data[1][0].value / (10 ^ 6)));
    const value = Number(result.data[1][0].value / (10 ^ 6));

    this.setState({
      arrData: [...arrData, [element.country, value]]
    });
    console.log(this.state.arrData);
  };

  handleShowSearch = () => {
    this.setState({ isSelected: false });
  };

  handleCountryChange = event => {
    const searchCriteria = event.target.value;
    const { arrCountry } = this.state;
    this.setState({ isSelected: true });

    arrCountry.map(element => {
      return axios(
        `${API.BASE_PATH}${element.code}/indicators/${searchCriteria}${API.CRITERIAS}`
      )
        .then(resp => {
          this.setCountryArray(element, resp);
          console.log(searchCriteria);
        })
        .catch(error => this.setState({ error }));
    });
  };

  render() {
    const { arrData, isSelected } = this.state;

    return (
      <>
        {isSelected ? (
          <div className="container-search" onClick={this.handleShowSearch}>
            <GoSearch className="search-icon" size={30} />
          </div>
        ) : null}
        {isSelected ? (
          <div className="container-map">
            <Map data={arrData} />
          </div>
        ) : null}
        {isSelected ? null : (
          <CountrySelect onChange={this.handleCountryChange} />
        )}
      </>
    );
  }
}

export default App;

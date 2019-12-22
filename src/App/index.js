import React, { Component } from "react";
import Map from "../Map";
import Search from "../Search";
import CountrySelect from "../CountrySelect";
import axios from "axios";
import { GoSearch } from "react-icons/go";
import * as API from "../constants/api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrData: [["Country", "Indicator"]],
      arrCountry: [
        { country: "France", code: "FRA" },
        { country: "Canada", code: "CAN" },
        { country: "Morocco", code: "MAR" },
        { country: "US", code: "USA" }
      ],
      searchCriteria: "",
      isSelected: false,
      error: false
    };
  }

  setCountryArray = (element, result) => {
    const { arrData } = this.state;
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits: 3
    });
    const value = formatter.format(result.data[1][0].value / (10 ^ 6));

    this.setState({
      arrData: [...arrData, [element.country, value]]
    });
    console.log(this.state.arrData);
  };

  handleShowSearch = () => {
    this.setState({ isSelected: false });
  };

  handleCountryChange = event => {
    this.setState({ searchCriteria: event.target.value, isSelected: true });

    const { searchCriteria, arrCountry } = this.state;

    console.log(searchCriteria);

    arrCountry.map(element => {
      axios(
        `https://api.worldbank.org/v2/countries/${element.code}/indicators/${searchCriteria}?date=2017&format=json`
      )
        .then(resp => this.setCountryArray(element, resp))
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

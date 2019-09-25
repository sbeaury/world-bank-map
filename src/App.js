import React, { Component } from "react";
import Map from "./Map";
import Search from "./Search";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrData: [],
      arrCountry: [
        { country: "France", code: "FRA" },
        { country: "Canada", code: "CAN" },
        { country: "Morocco", code: "MAR" },
        { country: "US", code: "USA" }
      ],
      searchCriteria: "",
      error: false
    };
    this.onCriteriaChange = this.onCriteriaChange.bind(this);
    this.setCountryArray = this.setCountryArray.bind(this);
  }

  componentDidMount() {
    this.setState({ arrData: [["Country", "Indicator"]] });
  }

  setCountryArray(element, result) {
    const { arrData } = this.state;
    const value = Math.round(result.data[1][0].value / (10 ^ 6)).toLocaleString(
      "en"
    );

    console.log(value);

    this.setState({
      arrData: [...arrData, ["Country", "Indicator"], [element.country, value]]
    });
    console.log(this.setState.arrData);
  }

  onCriteriaChange(event) {
    this.setState({ searchCriteria: event.target.value });

    const { searchCriteria } = this.state;

    this.state.arrCountry.map(element => {
      axios(
        `https://api.worldbank.org/v2/countries/${
          element.code
        }/indicators/${searchCriteria}?date=2017&format=json`
      )
        .then(resp => this.setCountryArray(element, resp))
        .catch(error => this.setState({ error }));
    });
  }

  render() {
    const { arrData } = this.state;

    return (
      <div className="App">
        <Search onChange={this.onCriteriaChange} />
        <Map data={arrData} />
      </div>
    );
  }
}

export default App;

import React from "react";
import { Chart } from "react-google-charts";

const Map = ({ data }) => (
  <Chart
    width={"80%"}
    height={"auto"}
    chartType="GeoChart"
    data={data}
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    // mapsApiKey="YOUR_KEY_HERE"
    rootProps={{ "data-testid": "1" }}
    options={{
      backgroundColor: "#003366"
    }}
  />
);

export default Map;

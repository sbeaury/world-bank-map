import React, { useEffect, useState, memo } from "react";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";

const maxValue = arr => {
  let arrData = [];
  arr.map(elt => arrData.push(elt.value));
  return Math.max(...arrData);
};

const minValue = arr => {
  let arrData = [];
  arr.map(elt => arrData.push(elt.value));
  return Math.min(...arrData);
};

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = (value, dataArray) => {
  const result = scaleLinear()
    .domain([minValue(dataArray), maxValue(dataArray)])
    .range(["#ffedea", "#ff5233"]);
  return result(value);
};

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapChart = ({ setTooltipContent, data }) => {
  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 200
      }}
      data-tip=""
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      {data.length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const d = data.find(s => s.ISO3 === geo.properties.ISO_A3);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d["value"], data) : "#F5F4F6"}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    try {
                      setTooltipContent(`${NAME} — ${rounded(d["value"])}`);
                    } catch {
                      setTooltipContent("");
                    }
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                />
              );
            })
          }
        </Geographies>
      )}
    </ComposableMap>
  );
};

export default memo(MapChart);

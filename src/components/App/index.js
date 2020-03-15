import React, { useState, useEffect, memo } from "react";
import MapChart from "../Map";
import CountrySelect from "../CountrySelect";
import axios from "axios";
import { GoSearch } from "react-icons/go";
import * as API from "../../constants/api";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const topThree = [0, 1, 2];

const IsoCodes = require(`../../data/IsoCodes`).codes;

const getMaxValues = array => {
  const arrayToFilter = array
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 4);
  let result = [];
  arrayToFilter.map(elt => {
    const filter = IsoCodes.filter(iso => iso.code === elt.ISO3);

    if (filter.length) {
      result.push(filter[0].country);
    }
  });
  console.log(result);
  return result;
};

const List = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: row;
    font-size: 12px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 1rem;

  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

const Img = styled.img`
  height: 1.3rem;
  margin-bottom: -0.2rem;
  @media screen and (max-width: 375px) {
    height: 1rem;
  }
`;

const App = () => {
  const [content, setContent] = useState("");
  const [dataFile, setDataFile] = useState([]);
  const [data, setDataSet] = useState([]);
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    setDataFile([]);
    setDataSet([]);
  }, []);

  const handleChange = e => {
    const dataFile = require(`../../data/${e.target.value}`);
    setDataFile(dataFile);
    setDataSet(dataFile.data);
    setSelected(true);
  };

  return (
    <>
      {isSelected ? (
        <div className="container-search" onClick={() => setSelected(false)}>
          <GoSearch className="search-icon" size={30} />
        </div>
      ) : null}
      {isSelected ? (
        <div>
          <Fade left cascade>
            <List>
              {topThree.map(index => (
                <h2 style={{ margin: "1rem 0.5rem 0 0.5rem" }}>
                  {index + 1}.{getMaxValues(data)[index]}
                </h2>
              ))}
            </List>
          </Fade>
          <MapChart data={data} setTooltipContent={setContent} />
          <ReactTooltip>{content}</ReactTooltip>
          <Footer>
            Created with
            <span role="img" aria-label="heart">
              ❤️
            </span>
            using
            <a href="https://www.react-simple-maps.io/">
              <Img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5BcnRib2FyZDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJBcnRib2FyZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InJzbS1sb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMi4wMDAwMDAsIDIuMDAwMDAwKSI+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIHN0cm9rZT0iIzM0MzE0OCIgc3Ryb2tlLXdpZHRoPSIxLjkyMzA3NjkyIiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNEOEQ4RDgiIGZpbGwtcnVsZT0ibm9uemVybyIgY3g9IjIxLjUzODQ2MTUiIGN5PSIxOC40NjE1Mzg1IiByPSIxOC40NjE1Mzg1Ij48L2NpcmNsZT4KICAgICAgICAgICAgPHBhdGggZD0iTTYuMzA4NDY5MzEsMy4yMzE1NDYyNSBDLTIuMDE4NzEwMTgsMTEuNTU4NzI1OCAtMi4xMDE5ODE5OCwyNS4wMDgwMTI4IDYuMDU4NjUzOTIsMzMuNDM3NjM0NSBMNi4zMDg0NjkzMSwzMy42OTE1MzA3IEMxNC43MTk3NjE4LDQyLjEwMjgyMzEgMjguMzU3MTYxMyw0Mi4xMDI4MjMxIDM2Ljc2ODQ1MzgsMzMuNjkxNTMwNyBMMzYuNzY4NDUzOCwzMy42OTE1MzA3IiBpZD0iUGF0aCIgc3Ryb2tlPSIjMzQzMTQ4IiBzdHJva2Utd2lkdGg9IjEuOTIzMDc2OTIiIGZpbGwtb3BhY2l0eT0iMCIgZmlsbD0iI0Q4RDhEOCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTUuMzg0NjE1MzgsMTguNDYxNTM4NSBDNS4zODQ2MTUzOCwxNS45MTI1MzE5IDEyLjYxNjkzODcsMTMuODQ2MTUzOCAyMS41Mzg0NjE1LDEzLjg0NjE1MzggQzMwLjQ1OTk4NDQsMTMuODQ2MTUzOCAzNy42OTIzMDc3LDE1LjkxMjUzMTkgMzcuNjkyMzA3NywxOC40NjE1Mzg1IEMzNy42OTIzMDc3LDIxLjAxMDU0NSAzMC40NTk5ODQ0LDIzLjA3NjkyMzEgMjEuNTM4NDYxNSwyMy4wNzY5MjMxIEMxMi42MTY5Mzg3LDIzLjA3NjkyMzEgNS4zODQ2MTUzOCwyMS4wMTA1NDUgNS4zODQ2MTUzOCwxOC40NjE1Mzg1IFoiIGlkPSJPdmFsIiBzdHJva2U9IiNGRjU1MzMiIHN0cm9rZS13aWR0aD0iMS45MjMwNzY5MiIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRDhEOEQ4IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTEzLjQ2MTUzODUsMzIuNDUxMTc5NiBDMTEuMjU0MDM0MSwzMS4xNzY2NzYzIDEzLjA4MDY1OTgsMjMuODgwMTExNiAxNy41NDE0MjEyLDE2LjE1Mzg0NjIgQzIyLjAwMjE4MjcsOC40Mjc1ODA2OSAyNy40MDc4ODAyLDMuMTk3Mzk0MDUgMjkuNjE1Mzg0Niw0LjQ3MTg5NzMyIEMzMS44MjI4ODksNS43NDY0MDA2MiAyOS45OTYyNjMzLDEzLjA0Mjk2NTMgMjUuNTM1NTAxOCwyMC43NjkyMzA4IEMyMS4wNzQ3NDA0LDI4LjQ5NTQ5NjIgMTUuNjY5MDQyOCwzMy43MjU2ODI4IDEzLjQ2MTUzODUsMzIuNDUxMTc5NiBaIiBpZD0iT3ZhbC1Db3B5IiBzdHJva2U9IiNGRjU1MzMiIHN0cm9rZS13aWR0aD0iMS45MjMwNzY5MiIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRDhEOEQ4IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTI5LjYxNTM4NDYsMzIuNDUxMTc5NiBDMjcuNDA3ODgwMiwzMy43MjU2ODI4IDIyLjAwMjE4MjcsMjguNDk1NDk2MiAxNy41NDE0MjEyLDIwLjc2OTIzMDggQzEzLjA4MDY1OTgsMTMuMDQyOTY1MyAxMS4yNTQwMzQxLDUuNzQ2NDAwNjIgMTMuNDYxNTM4NSw0LjQ3MTg5NzMyIEMxNS42NjkwNDI4LDMuMTk3Mzk0MDUgMjEuMDc0NzQwNCw4LjQyNzU4MDY5IDI1LjUzNTUwMTgsMTYuMTUzODQ2MiBDMjkuOTk2MjYzMywyMy44ODAxMTE2IDMxLjgyMjg4OSwzMS4xNzY2NzYzIDI5LjYxNTM4NDYsMzIuNDUxMTc5NiBaIiBpZD0iT3ZhbC1Db3B5LTIiIHN0cm9rZT0iI0ZGNTUzMyIgc3Ryb2tlLXdpZHRoPSIxLjkyMzA3NjkyIiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNEOEQ4RDgiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBzdHJva2U9IiNGRjU1MzMiIHN0cm9rZS13aWR0aD0iMS4xNTM4NDYxNSIgZmlsbD0iI0ZGNTUzMyIgZmlsbC1ydWxlPSJub256ZXJvIiBjeD0iMjEuNTM4NDYxNSIgY3k9IjE4LjQ2MTUzODUiIHI9IjEuNTM4NDYxNTQiPjwvY2lyY2xlPgogICAgICAgICAgICA8cGF0aCBkPSJNMjEuNTM4NDYxNSw0My4wNzY5MjMxIEwyMS41Mzg0NjE1LDQ1LjM4NDYxNTQiIGlkPSJQYXRoLTIiIHN0cm9rZT0iIzM0MzE0OCIgc3Ryb2tlLXdpZHRoPSIxLjkyMzA3NjkyIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTEyLjMwNzY5MjMsNDguNDYxNTM4NSBMMzAuNzY5MjMwOCw0OC40NjE1Mzg1IiBpZD0iUGF0aC0zIiBzdHJva2U9IiMzNDMxNDgiIHN0cm9rZS13aWR0aD0iMS45MjMwNzY5MiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi42MTIzMDc3LDU5LjY4NDYxNTQgTDE0LjM1MDc2OTIsNTcuMTIxNTM4NSBDMTUuNTEzODQ2Miw1Ni44NjMwNzY5IDE2LjI0NjE1MzgsNTYuMDEyMzA3NyAxNi4yNDYxNTM4LDU0LjgyNzY5MjMgQzE2LjI0NjE1MzgsNTMuNDE2OTIzMSAxNS4yMTIzMDc3LDUyLjQ2OTIzMDggMTMuNjUwNzY5Miw1Mi40NjkyMzA4IEwxMCw1Mi40NjkyMzA4IEwxMCw1OS42ODQ2MTU0IEwxMS43NzY5MjMxLDU5LjY4NDYxNTQgTDExLjc3NjkyMzEsNTcuMjA3NjkyMyBMMTIuMjkzODQ2Miw1Ny4yMDc2OTIzIEwxNC40NjkyMzA4LDU5LjY4NDYxNTQgTDE2LjYxMjMwNzcsNTkuNjg0NjE1NCBaIE0xMS43NzY5MjMxLDU1LjcyMTUzODUgTDExLjc3NjkyMzEsNTMuOTg3NjkyMyBMMTMuNDU2OTIzMSw1My45ODc2OTIzIEMxNC4wOTIzMDc3LDUzLjk4NzY5MjMgMTQuNTAxNTM4NSw1NC4zMzIzMDc3IDE0LjUwMTUzODUsNTQuODQ5MjMwOCBDMTQuNTAxNTM4NSw1NS4zNzY5MjMxIDE0LjA5MjMwNzcsNTUuNzIxNTM4NSAxMy40NTY5MjMxLDU1LjcyMTUzODUgTDExLjc3NjkyMzEsNTUuNzIxNTM4NSBaIE0yMC4zMjc2OTIzLDUyLjMwNzY5MjMgQzE4LjYzNjkyMzEsNTIuMzA3NjkyMyAxNy40NzM4NDYyLDUzLjE4IDE3LjQ3Mzg0NjIsNTQuNTggQzE3LjQ3Mzg0NjIsNTUuODkzODQ2MiAxOC4zNzg0NjE1LDU2LjQzMjMwNzcgMTkuNDEyMzA3Nyw1Ni42NjkyMzA4IEwyMC45Miw1Ni45OTIzMDc3IEMyMS40MzY5MjMxLDU3LjEgMjEuNTg3NjkyMyw1Ny4zMDQ2MTU0IDIxLjU4NzY5MjMsNTcuNjI3NjkyMyBDMjEuNTg3NjkyMyw1OC4wNjkyMzA4IDIxLjE4OTIzMDgsNTguMzcwNzY5MiAyMC41MjE1Mzg1LDU4LjM3MDc2OTIgQzE5LjgsNTguMzcwNzY5MiAxOS4yODMwNzY5LDU4LjA0NzY5MjMgMTkuMSw1Ny4zMDQ2MTU0IEwxNy4yNjkyMzA4LDU3LjY2IEMxNy40NjMwNzY5LDU5LjA3MDc2OTIgMTguNzk4NDYxNSw1OS44NDYxNTM4IDIwLjQyNDYxNTQsNTkuODQ2MTUzOCBDMjIuMDI5MjMwOCw1OS44NDYxNTM4IDIzLjM5NjkyMzEsNTkuMDQ5MjMwOCAyMy4zOTY5MjMxLDU3LjUwOTIzMDggQzIzLjM5NjkyMzEsNTYuMzY3NjkyMyAyMi42NjQ2MTU0LDU1LjY4OTIzMDggMjEuNDE1Mzg0Niw1NS40MDkyMzA4IEwxOS45MTg0NjE1LDU1LjA3NTM4NDYgQzE5LjQ2NjE1MzgsNTQuOTc4NDYxNSAxOS4zMzY5MjMxLDU0Ljc2MzA3NjkgMTkuMzM2OTIzMSw1NC40NzIzMDc3IEMxOS4zMzY5MjMxLDU0LjA2MzA3NjkgMTkuNzEzODQ2Miw1My43NCAyMC4zMDYxNTM4LDUzLjc0IEMyMC44NzY5MjMxLDUzLjc0IDIxLjQzNjkyMzEsNTQuMDczODQ2MiAyMS41NjYxNTM4LDU0Ljc1MjMwNzcgTDIzLjMxMDc2OTIsNTQuMzk2OTIzMSBDMjMuMDQxNTM4NSw1My4wODMwNzY5IDIxLjksNTIuMzA3NjkyMyAyMC4zMjc2OTIzLDUyLjMwNzY5MjMgWiBNMzMuMDc4NDYxNSw1Mi40NjkyMzA4IEwzMy4wNzg0NjE1LDU5LjY4NDYxNTQgTDMxLjM1NTM4NDYsNTkuNjg0NjE1NCBMMzEuMzU1Mzg0Niw1NS44NCBMMjkuMzMwNzY5Miw1OS42ODQ2MTU0IEwyOC41MTIzMDc3LDU5LjY4NDYxNTQgTDI2LjQ3NjkyMzEsNTUuODE4NDYxNSBMMjYuNDc2OTIzMSw1OS42ODQ2MTU0IEwyNC43NTM4NDYyLDU5LjY4NDYxNTQgTDI0Ljc1Mzg0NjIsNTIuNDY5MjMwOCBMMjYuNDk4NDYxNSw1Mi40NjkyMzA4IEwyOC45MjE1Mzg1LDU3LjA0NjE1MzggTDMxLjM0NDYxNTQsNTIuNDY5MjMwOCBMMzMuMDc4NDYxNSw1Mi40NjkyMzA4IFoiIGlkPSJSU00iIGZpbGw9IiNGRjU1MzMiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" />
            </a>
            & the &nbsp;
            <a href="https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information">
              World Bank Open Data API
            </a>
          </Footer>
        </div>
      ) : null}
      {isSelected ? null : (
        <div
          style={{
            marginTop: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <CountrySelect onChange={handleChange} />
        </div>
      )}
    </>
  );
};

export default App;

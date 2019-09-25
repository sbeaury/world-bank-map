import React from "react";

const Search = ({ onChange }) => (
  <form>
    What country is
    <select id="selection" onChange={onChange}>
      <option value="NY.GDP.MKTP.CD">&nbsp;the richest?</option>
      <option value="SL.GDP.PCAP.EM.KD">&nbsp;the richest per capita?</option>
    </select>
  </form>
);

export default Search;

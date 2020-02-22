const codes = [
  {
    country: "Afghanistan",
    code: "AFG"
  },
  {
    country: "Angola",
    code: "AGO"
  },
  {
    country: "Albania",
    code: "ALB"
  },
  {
    country: "United Arab Emirates",
    code: "ARE"
  },
  {
    country: "Argentina",
    code: "ARG"
  },
  {
    country: "Armenia",
    code: "ARM"
  },
  {
    country: "Australia",
    code: "AUS"
  },
  {
    country: "Austria",
    code: "AUT"
  },
  {
    country: "Azerbaijan",
    code: "AZE"
  },
  {
    country: "Burundi",
    code: "BDI"
  },
  {
    country: "Belgium",
    code: "BEL"
  },
  {
    country: "Benin",
    code: "BEN"
  },
  {
    country: "Burkina Faso",
    code: "BFA"
  },
  {
    country: "Bangladesh",
    code: "BGD"
  },
  {
    country: "Bulgaria",
    code: "BGR"
  },
  {
    country: "The Bahamas",
    code: "BHS"
  },
  {
    country: "Bosnia and Herzegovina",
    code: "BIH"
  },
  {
    country: "Belarus",
    code: "BLR"
  },
  {
    country: "Belize",
    code: "BLZ"
  },
  {
    country: "Bolivia",
    code: "BOL"
  },
  {
    country: "Brazil",
    code: "BRA"
  },
  {
    country: "Brunei",
    code: "BRN"
  },
  {
    country: "Bhutan",
    code: "BTN"
  },
  {
    country: "Botswana",
    code: "BWA"
  },
  {
    country: "Central African Republic",
    code: "CAF"
  },
  {
    country: "Canada",
    code: "CAN"
  },
  {
    country: "Switzerland",
    code: "CHE"
  },
  {
    country: "Chile",
    code: "CHL"
  },
  {
    country: "China",
    code: "CHN"
  },
  {
    country: "Ivory Coast",
    code: "CIV"
  },
  {
    country: "Cameroon",
    code: "CMR"
  },
  {
    country: "Democratic Republic of the Congo",
    code: "COD"
  },
  {
    country: "Republic of the Congo",
    code: "COG"
  },
  {
    country: "Colombia",
    code: "COL"
  },
  {
    country: "Costa Rica",
    code: "CRI"
  },
  {
    country: "Cuba",
    code: "CUB"
  },
  {
    country: "Cyprus",
    code: "CYP"
  },
  {
    country: "Czech Republic",
    code: "CZE"
  },
  {
    country: "Germany",
    code: "DEU"
  },
  {
    country: "Djibouti",
    code: "DJI"
  },
  {
    country: "Denmark",
    code: "DNK"
  },
  {
    country: "Dominican Republic",
    code: "DOM"
  },
  {
    country: "Algeria",
    code: "DZA"
  },
  {
    country: "Ecuador",
    code: "ECU"
  },
  {
    country: "Egypt",
    code: "EGY"
  },
  {
    country: "Eritrea",
    code: "ERI"
  },
  {
    country: "Spain",
    code: "ESP"
  },
  {
    country: "Estonia",
    code: "EST"
  },
  {
    country: "Ethiopia",
    code: "ETH"
  },
  {
    country: "Finland",
    code: "FIN"
  },
  {
    country: "Fiji",
    code: "FJI"
  },
  {
    country: "Falkland Islands",
    code: "FLK"
  },
  {
    country: "France",
    code: "FRA"
  },
  {
    country: "French Guiana",
    code: "GUF"
  },
  {
    country: "Gabon",
    code: "GAB"
  },
  {
    country: "United Kingdom",
    code: "GBR"
  },
  {
    country: "Georgia",
    code: "GEO"
  },
  {
    country: "Ghana",
    code: "GHA"
  },
  {
    country: "Guinea",
    code: "GIN"
  },
  {
    country: "Gambia",
    code: "GMB"
  },
  {
    country: "Guinea Bissau",
    code: "GNB"
  },
  {
    country: "Equatorial Guinea",
    code: "GNQ"
  },
  {
    country: "Greece",
    code: "GRC"
  },
  {
    country: "Greenland",
    code: "GRL"
  },
  {
    country: "Guatemala",
    code: "GTM"
  },
  {
    country: "Guyana",
    code: "GUY"
  },
  {
    country: "Honduras",
    code: "HND"
  },
  {
    country: "Croatia",
    code: "HRV"
  },
  {
    country: "Haiti",
    code: "HTI"
  },
  {
    country: "Hungary",
    code: "HUN"
  },
  {
    country: "Indonesia",
    code: "IDN"
  },
  {
    country: "India",
    code: "IND"
  },
  {
    country: "Ireland",
    code: "IRL"
  },
  {
    country: "Iran",
    code: "IRN"
  },
  {
    country: "Iraq",
    code: "IRQ"
  },
  {
    country: "Iceland",
    code: "ISL"
  },
  {
    country: "Israel",
    code: "ISR"
  },
  {
    country: "Italy",
    code: "ITA"
  },
  {
    country: "Jamaica",
    code: "JAM"
  },
  {
    country: "Jordan",
    code: "JOR"
  },
  {
    country: "Japan",
    code: "JPN"
  },
  {
    country: "Kazakhstan",
    code: "KAZ"
  },
  {
    country: "Kenya",
    code: "KEN"
  },
  {
    country: "Kyrgyzstan",
    code: "KGZ"
  },
  {
    country: "Cambodia",
    code: "KHM"
  },
  {
    country: "South Korea",
    code: "KOR"
  },
  {
    country: "Kuwait",
    code: "KWT"
  },
  {
    country: "Laos",
    code: "LAO"
  },
  {
    country: "Lebanon",
    code: "LBN"
  },
  {
    country: "Liberia",
    code: "LBR"
  },
  {
    country: "Libya",
    code: "LBY"
  },
  {
    country: "Sri Lanka",
    code: "LKA"
  },
  {
    country: "Lesotho",
    code: "LSO"
  },
  {
    country: "Lithuania",
    code: "LTU"
  },
  {
    country: "Luxembourg",
    code: "LUX"
  },
  {
    country: "Latvia",
    code: "LVA"
  },
  {
    country: "Morocco",
    code: "MAR"
  },
  {
    country: "Moldova",
    code: "MDA"
  },
  {
    country: "Madagascar",
    code: "MDG"
  },
  {
    country: "Mexico",
    code: "MEX"
  },
  {
    country: "Macedonia",
    code: "MKD"
  },
  {
    country: "Mali",
    code: "MLI"
  },
  {
    country: "Myanmar",
    code: "MMR"
  },
  {
    country: "Montenegro",
    code: "MNE"
  },
  {
    country: "Mongolia",
    code: "MNG"
  },
  {
    country: "Mozambique",
    code: "MOZ"
  },
  {
    country: "Mauritania",
    code: "MRT"
  },
  {
    country: "Malawi",
    code: "MWI"
  },
  {
    country: "Malaysia",
    code: "MYS"
  },
  {
    country: "Namibia",
    code: "NAM"
  },
  {
    country: "New Caledonia",
    code: "NCL"
  },
  {
    country: "Niger",
    code: "NER"
  },
  {
    country: "Nigeria",
    code: "NGA"
  },
  {
    country: "Nicaragua",
    code: "NIC"
  },
  {
    country: "Netherlands",
    code: "NLD"
  },
  {
    country: "Norway",
    code: "NOR"
  },
  {
    country: "Nepal",
    code: "NPL"
  },
  {
    country: "New Zealand",
    code: "NZL"
  },
  {
    country: "Oman",
    code: "OMN"
  },
  {
    country: "Pakistan",
    code: "PAK"
  },
  {
    country: "Panama",
    code: "PAN"
  },
  {
    country: "Peru",
    code: "PER"
  },
  {
    country: "Philippines",
    code: "PHL"
  },
  {
    country: "Papua New Guinea",
    code: "PNG"
  },
  {
    country: "Poland",
    code: "POL"
  },
  {
    country: "Puerto Rico",
    code: "PRI"
  },
  {
    country: "North Korea",
    code: "PRK"
  },
  {
    country: "Portugal",
    code: "PRT"
  },
  {
    country: "Paraguay",
    code: "PRY"
  },
  {
    country: "Qatar",
    code: "QAT"
  },
  {
    country: "Romania",
    code: "ROU"
  },
  {
    country: "Russia",
    code: "RUS"
  },
  {
    country: "Rwanda",
    code: "RWA"
  },
  {
    country: "Western Sahara",
    code: "ESH"
  },
  {
    country: "Saudi Arabia",
    code: "SAU"
  },
  {
    country: "Sudan",
    code: "SDN"
  },
  {
    country: "South Sudan",
    code: "SSD"
  },
  {
    country: "Senegal",
    code: "SEN"
  },
  {
    country: "Solomon Islands",
    code: "SLB"
  },
  {
    country: "Sierra Leone",
    code: "SLE"
  },
  {
    country: "El Salvador",
    code: "SLV"
  },
  {
    country: "Somalia",
    code: "SOM"
  },
  {
    country: "Republic of Serbia",
    code: "SRB"
  },
  {
    country: "Suriname",
    code: "SUR"
  },
  {
    country: "Slovakia",
    code: "SVK"
  },
  {
    country: "Slovenia",
    code: "SVN"
  },
  {
    country: "Sweden",
    code: "SWE"
  },
  {
    country: "Swaziland",
    code: "SWZ"
  },
  {
    country: "Syria",
    code: "SYR"
  },
  {
    country: "Chad",
    code: "TCD"
  },
  {
    country: "Togo",
    code: "TGO"
  },
  {
    country: "Thailand",
    code: "THA"
  },
  {
    country: "Tajikistan",
    code: "TJK"
  },
  {
    country: "Turkmenistan",
    code: "TKM"
  },
  {
    country: "East Timor",
    code: "TLS"
  },
  {
    country: "Trinidad and Tobago",
    code: "TTO"
  },
  {
    country: "Tunisia",
    code: "TUN"
  },
  {
    country: "Turkey",
    code: "TUR"
  },
  {
    country: "Taiwan",
    code: "TWN"
  },
  {
    country: "United Republic of Tanzania",
    code: "TZA"
  },
  {
    country: "Uganda",
    code: "UGA"
  },
  {
    country: "Ukraine",
    code: "UKR"
  },
  {
    country: "Uruguay",
    code: "URY"
  },
  {
    country: "United States",
    code: "USA"
  },
  {
    country: "Uzbekistan",
    code: "UZB"
  },
  {
    country: "Venezuela",
    code: "VEN"
  },
  {
    country: "Vietnam",
    code: "VNM"
  },
  {
    country: "Vanuatu",
    code: "VUT"
  },
  {
    country: "West Bank",
    code: "PSE"
  },
  {
    country: "Yemen",
    code: "YEM"
  },
  {
    country: "South Africa",
    code: "ZAF"
  },
  {
    country: "Zambia",
    code: "ZMB"
  },
  {
    country: "Zimbabwe",
    code: "ZWE"
  }
];

module.exports = { codes };

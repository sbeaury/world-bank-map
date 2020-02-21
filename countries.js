fetch(
  "https://api.worldbank.org/v2/countries/indicators/NY.GDP.MKTP.CD?date=2017&format=json"
)
  .then(resp => resp.json())
  .then(result => console.log(result[1]));

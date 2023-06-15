const input = document.getElementById("input");
const search = document.getElementById("search");
var CovidData;
fetch("https://disease.sh/v3/covid-19/countries")
  .then((response) => response.json())
  .then((data) => mydata(data));
function mydata(data) {
  CovidData = data;
}
search.addEventListener((e) => {
  e.preventDefault();
});

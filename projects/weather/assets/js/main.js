import '../stylesheet/style.scss';
import {create} from './create.js';


var displayReport = document.querySelector(".display__weather");
var searchPlace = document.querySelector("#searchPlace");
var displayCity = document.querySelector("#search__city");


var storeLatitude;
var storeLongitude;
var storeReport;
var storeSearch;

function getWeather(){
  var data = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${storeLatitude}&lon=${storeLongitude}&appid=555d08b7ce7f613747408910cfce3af1`).then(d=>d.json()).then(d=>{storeReport = d; showReport()});
}
function showReport(){
  let placeName = `Your Place : ${storeReport.name}  , ${storeReport.sys.country}`;
  create("h4", placeName,"place", displayReport);

  let temp = `Temperature : ${(storeReport.main.temp-273.15).toFixed(2)} (${storeReport.weather[0].description})`;
  create("div", temp, "temperature", displayReport);

  let latitude = `Latitude : ${storeReport.coord.lat}`;
  create("span", latitude, "latitude", displayReport);

  let longitude = `Longitude : ${storeReport.coord.lon}`;
  create("span", longitude, "longitude", displayReport);


  let minTemp = `Min Temp : ${(storeReport.main.temp_min-273.15).toFixed(2)}`;
  create("span", minTemp, "minTemp", displayReport);
  
  let maxTemp = `Max Temp : ${(storeReport.main.temp_max-273.15).toFixed(2)}`;
  create("span", maxTemp, "maxTemp", displayReport);

  let pressure = `Pressure : ${(storeReport.main.pressure).toFixed(2)}`;
  create("span", pressure, "pressure", displayReport);

  let humidity = `Humidity : ${(storeReport.main.humidity).toFixed(2)}`;
  create("span", humidity, "humidity", displayReport);

  console.log(storeReport);
  
}


function searchDetails(e){
  if(e.keyCode == 13){
    var data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchPlace.value}&appid=555d08b7ce7f613747408910cfce3af1`).then(d=>d.json()).then(d=>{storeSearch = d;showSearch(storeSearch)});
  }
}
function showSearch(storeSearch){
  let temp = `Temperature : ${(storeSearch.main.temp-273.15).toFixed(2)}`;

  if(displayCity.childElementCount == 0){
    create("h4", temp, "temperature", displayCity);
  } else {
    displayCity.innerHTML = "";
    create("h4", temp, "temperature", displayCity);
  }
}





window.onload = function(){
navigator.geolocation.getCurrentPosition(d => {storeLatitude = d.coords.latitude; storeLongitude = d.coords.longitude; getWeather();});
}


searchPlace.addEventListener("keydown", searchDetails)
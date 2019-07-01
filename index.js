const key = "469c241d9a72addf7ad83b0a96ed7206";
let city = document.getElementById("input");
let cityName = city.value;
let link = `http://api.openweathermap.org/data/2.5/weather?q=${cityName},uk&APPID=${key}`;

//  const axios = require("axios");

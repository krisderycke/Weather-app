const key = "469c241d9a72addf7ad83b0a96ed7206";

function getWeather() {
  let button = document.getElementById("search");
  button.addEventListener("click", async function(e) {
    let city = document.getElementById("input").value;
    let link = `http://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&APPID=${key}&unit=metrics`;
    let response = await axios.get(link);
    // let result = document.getElementById("result");
    console.log(response.data);
    console.log(response.data.list[0].main);
    console.log(response.data.list[0].main.temp);
    console.log(response.data.list[8].main.temp);
    console.log(response.data.list[16].main.temp);
    console.log(response.data.list[24].main.temp);
    console.log(response.data.list[32].main.temp);
    let weather = response.data.list[0].main;

    // document.getElementById("current").innerHTML += weather.temp + " °C";
    // document.getElementById("min").innerHTML += weather.temp_min + " °C";
    // document.getElementById("max").innerHTML += weather.temp_max + " °C";
    // document.getElementById("humidity").innerHTML += weather.humidity + " %";
    let current = document.getElementsByClassName("current");
    let max = document.getElementsByClassName("max");
    let humidity = document.getElementsByClassName("humidity");
    console.log(current);
    console.log(max);
    console.log(humidity);
    // result.innerHTML = response.data.list[0].main.temp_max;
  });
}
getWeather();

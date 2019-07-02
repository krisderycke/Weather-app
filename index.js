const key = "469c241d9a72addf7ad83b0a96ed7206";

function getWeather() {
  let button = document.getElementById("search");
  button.addEventListener("click", async function(e) {
    let city = document.getElementById("input").value;
    let link = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${key}&unit=metrics`;
    let response = await axios.get(link);
    let result = document.getElementById("result");
    console.log(response.data.list);
    console.log(response.data.list[0].main);
    console.log(response.data.list[0].main.temp);
    let weather = response.data.list[0].main;

    document.getElementById("current").innerHTML = weather.temp;
    document.getElementById("min").innerHTML = weather.temp_min;
    document.getElementById("max").innerHTML = weather.temp_max;
    document.getElementById("humidity").innerHTML = weather.humidity;

    // result.innerHTML = response.data.list[0].main.temp_max;
  });
}
getWeather();

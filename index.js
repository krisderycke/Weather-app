const key = "469c241d9a72addf7ad83b0a96ed7206";

function getWeather() {
  let button = document.getElementById("search");
  button.addEventListener("click", async function(e) {
    let city = document.getElementById("input").value;
    let link = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${key}&unit=metrics`;
    let response = await axios.get(link);
    let result = document.getElementById("result");
    console.log(response.data.list[0].main);

    // result.innerHTML = response.data.list[0].main.temp_max;
  });
}
getWeather();

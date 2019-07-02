const key = "469c241d9a72addf7ad83b0a96ed7206";

function getWeather() {
  let button = document.getElementById("search");
  button.addEventListener("click", async function(e) {
    let city = document.getElementById("input").value;
    let link = `http://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&APPID=${key}&unit=metrics`;
    let response = await axios.get(link);

    //console.log(response.data.list);
    // console.log(response.data.list[0].main);
    // console.log(response.data.list[0].main.temp);
    // console.log(response.data.list[8].main.temp);
    // console.log(response.data.list[16].main.temp);
    // console.log(response.data.list[24].main.temp);
    // console.log(response.data.list[32].main.temp);
    // let weather = response.data.list[0].main;

    // document.getElementById("current").innerHTML += weather.temp + " °C";
    // document.getElementById("min").innerHTML += weather.temp_min + " °C";
    // document.getElementById("max").innerHTML += weather.temp_max + " °C";
    // document.getElementById("humidity").innerHTML += weather.humidity + " %";

    const week = [];
    const dayOne = [];
    const dayTwo = [];
    const dayThree = [];
    const dayFour = [];
    const dayFive = [];

    let current = document.getElementsByClassName("current");
    let max = document.getElementsByClassName("max");
    let humidity = document.getElementsByClassName("humidity");
    for (let i = 0; i < response.data.list.length; i += 8) {
      //   console.log(response.data.list[i].main); // shows the data for the 5 days (the +8 is because you have 40elements. 40 divided by 5 days is 8)
      week.push(response.data.list[i].main); // pushes the 5days weather details into 1 array
    }
    console.log(week[0]);
    dayOne.push(week[0]);
    dayTwo.push(week[1]);
    dayThree.push(week[2]);
    dayFour.push(week[3]);
    dayFive.push(week[4]);
    console.log(dayOne[0].temp);
    console.log(dayTwo[0].temp);
    console.log(dayThree[0].temp);
    console.log(dayFour[0].temp);
    console.log(dayFive[0].temp);

    for (let i = 0; i < current.length; i++) {
      const element = current[i];
      element.innerHTML += dayOne[0].temp;
    }
  });
}
getWeather();

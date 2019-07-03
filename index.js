const key = "469c241d9a72addf7ad83b0a96ed7206";

function getWeather() {
  let button = document.getElementById("search");
  button.addEventListener("click", async function(e) {
    let city = document.getElementById("input").value;
    let link = `http://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&APPID=${key}&unit=metrics`;
    let response = await axios.get(link);
    console.log(response);

    //console.log(response.data.list);
    // console.log(response.data.list[0].main);
    // console.log(response.data.list[0].main.temp);
    // console.log(response.data.list[8].main.temp);
    // console.log(response.data.list[16].main.temp);
    // console.log(response.data.list[24].main.temp);
    // console.log(response.data.list[32].main.temp);
    // let weather = response.data.list[0].main;

    const week = [];
    const dayOne = [];
    const dayTwo = [];
    const dayThree = [];
    const dayFour = [];
    const dayFive = [];

    for (let i = 0; i < response.data.list.length; i += 8) {
      //   console.log(response.data.list[i].main); // shows the data for the 5 days (the +8 is because you have 40elements. 40 divided by 5 days is 8)
      week.push(response.data.list[i]); // pushes the 5days weather details into 1 array
    }
    dayOne.push(week[0]);
    dayTwo.push(week[1]);
    dayThree.push(week[2]);
    dayFour.push(week[3]);
    dayFive.push(week[4]);
    console.log(week);

    let current1 = document.getElementById("current1");
    let current2 = document.getElementById("current2");
    let current3 = document.getElementById("current3");
    let current4 = document.getElementById("current4");
    let current5 = document.getElementById("current5");
    let wind1 = document.getElementById("wind1");
    let wind2 = document.getElementById("wind2");
    let wind3 = document.getElementById("wind3");
    let wind4 = document.getElementById("wind4");
    let wind5 = document.getElementById("wind5");
    // let humidity1 = document.getElementById("humidity1");
    // let humidity2 = document.getElementById("humidity2");
    // let humidity3 = document.getElementById("humidity3");
    // let humidity4 = document.getElementById("humidity4");
    // let humidity5 = document.getElementById("humidity5");

    current1.innerHTML = "  " + dayOne[0].main.temp + " °C";
    current2.innerHTML = "  " + dayTwo[0].main.temp + " °C";
    current3.innerHTML = "  " + dayThree[0].main.temp + " °C";
    current4.innerHTML = "  " + dayFour[0].main.temp + " °C";
    current5.innerHTML = "  " + dayFive[0].main.temp + " °C";

    wind1.innerHTML = "  " + dayOne[0].wind.speed + " Km/h";
    wind2.innerHTML = "  " + dayTwo[0].wind.speed + " Km/h";
    wind3.innerHTML = "  " + dayThree[0].wind.speed + " Km/h";
    wind4.innerHTML = "  " + dayFour[0].wind.speed + " Km/h";
    wind5.innerHTML = "  " + dayFive[0].wind.speed + " Km/h";
  });
}
getWeather();

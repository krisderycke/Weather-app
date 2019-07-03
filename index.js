const key = "469c241d9a72addf7ad83b0a96ed7206";

function getWeather() {
  let button = document.getElementById("search");
  button.addEventListener("click", async function(e) {
    let city = document.getElementById("input").value;
    let link = `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&APPID=${key}&unit=metrics`;
    let response = await axios.get(link);
    let backgroundPicture = `https://api.unsplash.com/search/photos?client_id=14ae078181c4ac0c05e7c214aa7f14a9d0351d246345edf147276c0b60ce8cea&page=1&query=${city}`;
    let responseBg = await axios.get(backgroundPicture);
    let background =
      responseBg.data.results[Math.floor(Math.random() * 11)].urls.full;
    document.body.style.backgroundImage = `url('${background}')`;
    console.log(background);
    console.log(response);

    let d = new Date();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[d.getDay()];
    console.log(d);
    console.log(days);
    console.log(day);
    // for (let i = 0; i < days.length; i++) {
    //   if (i > 6) {
    //     i = 0;
    //   }
    // }
    document.getElementById("day0").innerHTML = days[3];
    document.getElementById("day1").innerHTML = days[4];
    document.getElementById("day2").innerHTML = days[5];
    document.getElementById("day3").innerHTML = days[6];
    document.getElementById("day4").innerHTML = days[0];

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
    let icon1 = document.getElementById("icon1");
    let icon2 = document.getElementById("icon2");
    let icon3 = document.getElementById("icon3");
    let icon4 = document.getElementById("icon4");
    let icon5 = document.getElementById("icon5");
    console.log(dayOne);

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

    icon1.src =
      "https://openweathermap.org/img/wn/" +
      dayOne[0].weather[0].icon +
      "@2x.png";
    icon2.src =
      "https://openweathermap.org/img/wn/" +
      dayTwo[0].weather[0].icon +
      "@2x.png";
    icon3.src =
      "https://openweathermap.org/img/wn/" +
      dayThree[0].weather[0].icon +
      "@2x.png";
    icon4.src =
      "https://openweathermap.org/img/wn/" +
      dayFour[0].weather[0].icon +
      "@2x.png";
    icon5.src =
      "https://openweathermap.org/img/wn/" +
      dayFive[0].weather[0].icon +
      "@2x.png";
  });
}
getWeather();

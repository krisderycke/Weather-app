const key = "469c241d9a72addf7ad83b0a96ed7206";

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let dayOutput = document.getElementsByClassName("day");

let day = new Date().getDay();

for (let d = 0; d < dayOutput.length; d++, day++) {
  if (day >= 7) {
    day = 0;
  }
  dayOutput[d].innerHTML = days[day];
}

function getWeather() {
  let input = document.getElementById("input");

  input.addEventListener("keydown", async function(e) {
    if (e.keyCode === 13) {
      let city = document.getElementById("input").value;
      let link = `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&APPID=${key}`;
      let response = await axios.get(link);
      let backgroundPicture = `https://api.unsplash.com/search/photos?client_id=14ae078181c4ac0c05e7c214aa7f14a9d0351d246345edf147276c0b60ce8cea&page=1&query=${city}`;
      let responseBg = await axios.get(backgroundPicture);
      let background =
        responseBg.data.results[Math.floor(Math.random() * 10)].urls.full;
      document.body.style.backgroundImage = `url('${background}')`;
      console.log(background);
      console.log(response);

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

      // let current1 = document.getElementById("current1");
      // let current2 = document.getElementById("current2");
      // let current3 = document.getElementById("current3");
      // let current4 = document.getElementById("current4");
      // let current5 = document.getElementById("current5");

      // current1.innerHTML = "  " + dayOne[0].main.temp_max + " °C";
      // current2.innerHTML = "  " + dayTwo[0].main.temp_max + " °C";
      // current3.innerHTML = "  " + dayThree[0].main.temp_max + " °C";
      // current4.innerHTML = "  " + dayFour[0].main.temp_max + " °C";
      // current5.innerHTML = "  " + dayFive[0].main.temp_max + " °C";
      let currents = document.getElementsByClassName("current");
      for (let i = 0; i < currents.length; i++) {
        currents[i].innerHTML = "  " + week[i].main.temp_max + " °C";
      }

      // let wind1 = document.getElementById("wind1");
      // let wind2 = document.getElementById("wind2");
      // let wind3 = document.getElementById("wind3");
      // let wind4 = document.getElementById("wind4");
      // let wind5 = document.getElementById("wind5");

      // wind1.innerHTML = "  " + dayOne[0].wind.speed + " Km/h";
      // wind2.innerHTML = "  " + dayTwo[0].wind.speed + " Km/h";
      // wind3.innerHTML = "  " + dayThree[0].wind.speed + " Km/h";
      // wind4.innerHTML = "  " + dayFour[0].wind.speed + " Km/h";
      // wind5.innerHTML = "  " + dayFive[0].wind.speed + " Km/h";
      // console.log(week[i].wind.speed);
      let winds = document.getElementsByClassName("wind");
      for (let i = 0; i < winds.length; i++) {
        winds[i].innerHTML = "  " + week[i].wind.speed + " Km/h";
      }
      // show weather icosn in divs
      let icons = document.getElementsByClassName("icon");
      for (let i = 0; i < icons.length; i++) {
        icons[i].src =
          "https://openweathermap.org/img/wn/" +
          week[i].weather[0].icon +
          "@2x.png";
      }

      // change background of divs in corresponding weather conditions
      let results = document.getElementsByClassName("result");
      console.log(results);
      for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
        console.log(week[i]);
        let iconCode = week[i].weather[0].icon;
        console.log(iconCode);
        switch (iconCode) {
          case "01d":
            results[i].style.background = "url('../Assets/Pics/01d.jpg')";
            break;
          case "01n":
            results[i].style.background = "url('../Assets/Pics/01n.jpg')";
            break;
          case "02d":
            results[i].style.background = "url('../Assets/Pics/02d.jpg')";
            break;
          case "02n":
            results[i].style.background = "url('../Assets/Pics/02n.jpg')";
            break;
          case "03d":
            results[i].style.background = "url('../Assets/Pics/03d.jpg')";
            break;
          case "03n":
            results[i].style.background = "url('../Assets/Pics/02n.jpg')";
            break;
          case "04d":
          case "04n":
            results[i].style.background = "url('../Assets/Pics/04d.jpg')";
            break;
          case "09d":
          case "10d":
          case "09n":
          case "10n":
            results[i].style.background = "url('../Assets/Pics/09-10d.jpg')";
            break;
          case "11d":
          case "11n":
            results[i].style.background = "url('../Assets/Pics/11d.jpg')";
            break;
          case "13d":
          case "13n":
            results[i].style.background = "url('../Assets/Pics/13d.jpg')";
            break;
          case "50d":
          case "50n":
            results[i].style.background = "url('../Assets/Pics/50d.jpg')";
            break;
        }
      }
    }
  });
}
getWeather();

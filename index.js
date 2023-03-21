// // function getWeather() {
//   return new Promise((resolve, reject) => {});
// }

// fetch(
//   "http://api.weatherapi.com/v1/current.json?key=5c39fb3def5e4f8a9a6115012232402&q=India&aqi=yes"
// )
//   .then((data) => data.json())
//   .then((val) => console.log(val));

async function getData() {
  let data = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=5c39fb3def5e4f8a9a6115012232402&q=India&aqi=yes"
  );
  let apiData = await data.json();
  console.log(apiData);

  let details = {
    localTime: apiData.location.localtime,
    is_day: apiData.current.is_day,
    weather: apiData.current.condition.text,

    city: apiData.location.name,
    country: apiData.location.country,
    temperature: apiData.current.temp_c,
  };

  let date = `${new Date(details.localTime)}`; // triming the string to get only date without time
  let cuDate = date.slice(0, 10);

  document.querySelector(".temp").innerHTML = `${details.temperature}*`;
  document.querySelector(".heading").innerHTML = `${details.weather}`;

  document
    .querySelector(".discription")
    .querySelectorAll("p")[1].innerHTML = `${details.city}`;
  document
    .querySelector(".discription")
    .querySelectorAll("p")[0].innerHTML = `${cuDate}`;
  if (details.is_day == 0) {
    document.querySelector("img").src = "night.png";
  }
  if (details.is_day !== 0) {
    document.querySelector("img").src = "sun.png";
  }
}
getData();

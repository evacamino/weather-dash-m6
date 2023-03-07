(function ($) {
  const cityInput = $("#cityInput");
  const submitCity = $("submit-city");
  let fiveDays = $("#five-days");
  const apiKey = "1cd86b48a34044a569ad1b7f317f1eb4";
  let cityStorage = JSON.parse(localStorage.getItem("history")) || [];

  function getWeather(searchItem) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchItem}&appid=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fiveDay(data.coord.lat, data.coord.lon);
        cityInput.html("");
        fiveDays.html("");
        displayDay(data);
      });
  }
  function fiveDay(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < data.list.length; i += 8) {
          displayFive(data.list[i]);
        }
      });
  
  }
  
  function displayDay(data) {
    let card = $("#oneDayDisplay");
  
      const cardHtml = `
      <div class="card-body">
        <h5 class="card-title">${new Date(data.dt)}</h5>
        <p>Tempture: ${data.main.temp}</p>
        <p>Humidity: ${data.main.humidity}</p>
        <p>Wind: ${data.wind.speed}</p
      </div>
      `
const cardEl = $(cardHtml);
card.append(cardEl);

  }

  function Searching() {
    this.getWeather$("#cityInput").value;
  }

  document.querySelector("#submit-city").addEventListener("click", function () {
    const citySearchEl = document.querySelector("#cityInput");
    const cityText = citySearchEl.value;
    getWeather(cityText);
    fiveDay(cityText);
  });
})(jQuery);
// for (let i = 0; i < 5; i++) {

//}
function displayFive(data) {
  const cards = $("#five-days");

  const cardHtml = `
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${data.dt}</h5>
        <p>tempture: ${data.main.temp}</p>
        <p>humidity: ${data.main.humidity}</p>
        <p>wind: ${data.wind.speed}</p
      </div>
    </div>
  </div>
  `
  const cardEl = $(cardHtml);
  cards.append(cardEl);

  // cards.append(cardBodys);
  // $("#five-days").append(cards);
}
//</div>
// {/* <div class="card bg-light mb-3" style="max-width: 18rem;">
//   <div class="card-header">Header</div>
//   <div class="card-body">
//     <h5 class="card-title">Light card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div> */}

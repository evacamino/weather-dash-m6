(function ($) {
  const cityInput = $("#cityInput")
  const submitCity = $("submit-city")
  let fiveDays = $("#five-days")
  const apiKey = '1cd86b48a34044a569ad1b7f317f1eb4'
  let cityStorage = JSON.parse(localStorage.getItem('history')) || []

  function getWeather(searchItem) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchItem}&appid=${apiKey}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        cityInput.html('')
        fiveDays.html('')
        displayDay(data)
      });

  }
  function displayDay(data) {
    let card = $('<div>')
    card.addClass('card')
    let cardBody = $('<div>')
    card.addClass('card-body')
    let cardTitle = $('<div>')
    card.addClass('card-title')
    let cardText = $('<div>')
    card.addClass('card-text')
    cardTitle.text(new Date(data.dt))
    cardText.html(`<p>tempture: ${data.main.temp}</p><p><p>humidity: ${data.main.humidity}</p><p>wind: ${data.wind.speed}</p>`)
    cardBody.append(cardTitle).append(cardText)


    card.append(cardBody)
    $('#oneDayDisplay').append(card)
  }
  getWeather('London')



})(jQuery);

//</div>
// {/* <div class="card bg-light mb-3" style="max-width: 18rem;">
//   <div class="card-header">Header</div>
//   <div class="card-body">
//     <h5 class="card-title">Light card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div> */}

// // { coord: {… }, weather: Array(1), base: 'stations', main: {… }, visibility: 10000, … }
// base
// :
// "stations"
// clouds
// :
// { all: 96 }
// cod
// :
// 200
// coord
// :
// { lon: -0.1257, lat: 51.5085 }
// dt
// :
// 1677111645
// id
// :
// 2643743
// main
// :
// { temp: 279.16, feels_like: 276.81, temp_min: 277.84, temp_max: 280.01, pressure: 1013, … }
// name
// :
// "London"
// sys
// :
// { type: 2, id: 2075535, country: 'GB', sunrise: 1677135569, sunset: 1677173322 }
// timezone
// :
// 0
// visibility
// :
// 10000
// weather
// :
// Array(1)
// 0
// :
// { id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }
// length
// :
// 1
// [[Prototype]]
// :
// Array(0)
// wind
// :
// { speed: 3.09, deg: 350 }
// [[Prototype]]
// :
// Object
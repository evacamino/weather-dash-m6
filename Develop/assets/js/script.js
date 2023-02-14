(function($) {
const cityInput = $("#cityInput")
const submitCity = $("submit-city")
let fiveDays =$("#five-days")
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
  const card = ${'<div>'}
  card.addClass('card')
  const cardBody = ${'<div>'}
  card.addClass('card-body')
  const cardTitle= ${'<div>'}
  card.addClass('card-title')
  const cardText = ${'<div>'}
  card.addClass('card-text')
  cardTitle.text
  
  
  card.append(cardBody).append()
}
getWeather('London')



})(jQuery);


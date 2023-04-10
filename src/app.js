setInterval(function () {
  //los angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Mo YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //prague
  let pragueElement = document.querySelector("#prague");
  if (pragueElement) {
    let pragueDateElement = pragueElement.querySelector(".date");
    let pragueTimeElement = pragueElement.querySelector(".time");
    let pragueTime = moment().tz("Europe/prague");
    pragueDateElement.innerHTML = pragueTime.format("MMMM Mo YYYY");
    pragueTimeElement.innerHTML = pragueTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}, 1000);

function updateCity(event) {
  setInterval(function () {
    let cityTimeZone = event.target.value;
    let cityName = event.target.selectedOptions[0].innerHTML;
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
  <div class="city"">
          <div>
            <h2>${cityName}</h2>

            <div class="date">${cityTime.format("MMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small> ${cityTime.format("A")}</small></div>
        </div>
        <div class="city">
          <div>
  `;
  }, 1000);
}

let citiesSelectElement = document.querySelector("#cities-select");
citiesSelectElement.addEventListener("change", updateCity);

function showCityTime(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "paris") {
      alert(parisTime);
    }
    if (event.target.value === "tokyo") {
      alert(tokyoTime);
    }
    if (event.target.value === "sydney") {
      alert(sydneyTime);
    }
  }
}

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", showCityTime);

let parisTime = moment()
  .tz("Europe/Paris")
  .format("[It is ]dddd, MMMM D, YYYY h:m A [in Europe/Paris]");

let tokyoTime = moment()
  .tz("Asia/Tokyo")
  .format("[It is ]dddd, MMMM D, YYYY h:m A [in Asia/Tokyo]");

let sydneyTime = moment()
  .tz("Australia/Sydney")
  .format("[It is ]dddd, MMMM D, YYYY h:m A [in Australia/Sydney]");

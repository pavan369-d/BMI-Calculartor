let form = document.querySelector("form");
let result = document.querySelector("#result");
result.style.color = "white";
result.style.fontWeight = "bold";
let dispVal = 0;
let underWeight = 18.6;
let normalRange = 24.9;
let overWeight = 25;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let weight = parseInt(document.getElementById("weight").value);
  let height = parseInt(document.getElementById("height").value);

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid height ${height}`;
  } else {
    const bmI = (weight / ((height * height) / 10000)).toFixed(2);
    dispVal = bmI;

    weightGuide(dispVal);
  }
});
function weightGuide(dispVal) {
  if (dispVal < underWeight) {
    result.innerHTML = `<p>${dispVal}<br>Uner Weight</p>`;
  } else if (dispVal >= underWeight && dispVal <= normalRange) {
    result.innerHTML = `<p>${dispVal}<br>Normal Weight</p>`;
  } else if (dispVal > overWeight) {
    result.innerHTML = `<p>${dispVal}<br>OverWeight</p>`;
  }
}

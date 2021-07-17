function onSubmit() {
  let year = document.getElementById("year").value;
  let date = document.getElementById("date").value;
  let month = document.getElementById("month").value;
  let gender = document.getElementById("gender").value;
  return year ;
  return date;
  return month;
  return  gender;
}
if (year <1800 || year > 9999) {
  alert("Invalid year input");
} else if (date <= "0" || date > "31") {
  alert("Invalid date input");
} else if (month <= "0" || month > "12") {
  alert("Invalid month input");
} else alert("Valid input.");

const dd = parseInt(date);
console.log("dd is " + dd);

const mm = parseInt(month);
console.log("mm is " + mm);

const cc = parseInt(year.slice(0, 2));
console.log("cc is " + cc);

const yy = parseInt(year.slice(2, 4));
console.log("yy is " + yy);

let dayCalculation =
  (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7;
let day = parseInt(Math.abs(Math.round(dayCalculation)));
console.log(day);

if (gender == "female" && day == 1) {
  document.getElementById("output").innerHTML = "Your Akan name is Akosua";
} else if (gender == "female" && day == 2) {
  document.getElementById("output").innerHTML = "Your Akan name is Adwoa";
} else if (gender == "female" && day == 3) {
  document.getElementById("output").innerHTML = "Your Akan name is Abenaa";
} else if (gender == "female" && day == 4) {
  document.getElementById("output").innerHTML = "Your Akan name is Akua";
} else if (gender == "female" && day == 5) {
  document.getElementById("output").innerHTML = "Your Akan name is Yaa";
} else if (gender == "female" && day == 6) {
  document.getElementById("output").innerHTML = "Your Akan name is Afua";
} else if (gender == "female" && day == 7) {
  document.getElementById("output").innerHTML = "Your Akan name is Ama";
} else if (gender == "male" && day == 1) {
  document.getElementById("output").innerHTML = "Your Akan name is Kwasi";
} else if (gender == "male" && day == 2) {
  document.getElementById("output").innerHTML = "Your Akan name is Kwadwo";
} else if (gender == "male" && day == 3) {
  document.getElementById("output").innerHTML = "Your Akan name is Kwabena";
} else if (gender == "male" && day == 4) {
  document.getElementById("output").innerHTML = "Your Akan name is Kwaku";
} else if (gender == "male" && day == 5) {
  document.getElementById("output").innerHTML = "Your Akan name is Yaw";
} else if (gender == "male" && day == 6) {
  document.getElementById("output").innerHTML = "Your Akan name is Kofi";
} else if (gender == "male" && day == 7) {
  document.getElementById("output").innerHTML = "Your Akan name is Kwame";
} else {
  document.getElementById("output").innerHTML = "Missing input";
}

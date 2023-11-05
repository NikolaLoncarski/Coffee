// Nav Bar Scroll
const element = document.getElementById("navbar");
const x = window.matchMedia("(max-width: 992px)")

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementsByClassName("navbar-top")[0].style.top = "0";
    document.getElementsByClassName("navbar-top")[0].style.backgroundColor = "black";
    document.getElementsByClassName("navbar-top")[0].style.transition = "0.3s";
    element.classList.add("sticky-top");
  } else {
    document.getElementsByClassName("navbar-top")[0].style.top = "0";
    document.getElementsByClassName("navbar-top")[0].style.backgroundColor = "transparent";
  }
}

// Single Product count



window.onload = function () {
  let count = 1;
  const inputNum = document.getElementById("quantity");
  const countPlus = document.getElementById("plus");
  const countMinus = document.getElementById("minus");

  countPlus.onclick = function () {
    count++;
    inputNum.value = count;
  }


  countMinus.onclick = function () {
    if (count > 1) {
      count--;
      inputNum.value = count;
    }
  }
}





// Tip Calculator
//Calculate Tip
function calculateTip() {
  const bill = document.getElementById("bill").value;
  const rating = document.getElementById("rating").value;
  const people = document.getElementById("people").value;

  //validate input
  if (bill === "" || rating === 0) {
    alert("Please enter values");
    return;
  }

  //Check to see if this input is empty or less than or equal to 1

  if (people === "" || people <= 1) {
    document.getElementById("each").style.visibility = "hidden";
  } else {
    document.getElementById("each").style.visibility = "visible";
  }

  //Calculate tip

  let total = (bill * rating) / people;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.visibility = "visible";
  document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load
document.getElementById("totalTip").style.visibility = "hidden";
document.getElementById("each").style.visibility = "hidden";

//click to call function
document.getElementById("calculate-button").onclick = function () {
  calculateTip();
};




// Google Map

function myMap() {
let mapProp = {
    center: new google.maps.LatLng(44.508742, 21.120850),
    zoom: 5,
  };
  let map = new google.maps.Map(document.getElementById("map"), mapProp);
}
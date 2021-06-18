// 1st set of event listeners

var hi = document.getElementsByClassName("living");
for (var i = 0; i < hi.length; i++) {
  hi[i].addEventListener("click", visible1);
}

// popup code

function visible1() {
  var x = document.getElementById("room1");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function visible2() {
  var x = document.getElementById("room2");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// room to room highlight

function room2colour() {
  var add = document.getElementsByClassName("bedroom");
  for (var i = 0; i < add.length; i++) {
    add[i].classList.add("blink");
  }
  var wall1 = document.getElementsByClassName("bedcur");
  for (var i = 0; i < wall1.length; i++) {
    wall1[i].style.cursor = "pointer";
    wall1[i].addEventListener("click", visible2);
  }
}
function room3colour() {
  var add = document.getElementsByClassName("studyroom");
  for (var i = 0; i < add.length; i++) {
    add[i].classList.add("blink");
  }
}

// hide functions

// hide to hide living room
function hide() {
  var rem = document.getElementsByClassName("living");
  for (var i = 0; i < rem.length; i++) {
    rem[i].classList.remove("blink");
  }
  var hl = document.getElementsByClassName("living");
  for (var i = 0; i < hl.length; i++) {
    hl[i].removeEventListener("click", visible1);
    hl[i].style.cursor = "auto";
  }
  setTimeout(() => {
    room2colour();
  }, 1000);
}
// hide to hide bed room
function hide2() {
  var rem = document.getElementsByClassName("bedroom");
  for (var i = 0; i < rem.length; i++) {
    rem[i].classList.remove("blink");
  }
  var hl = document.getElementsByClassName("bedroom");
  for (var i = 0; i < hl.length; i++) {
    hl[i].removeEventListener("click", visible2);
    hl[i].style.cursor = "auto";
  }
  setTimeout(() => {
    room3colour();
  }, 1000);
}

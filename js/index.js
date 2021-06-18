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
  var wall1 = document.getElementById("bedleft");
  wall1.style.cursor = "pointer";
  wall1.addEventListener("click", visible2);
}
function room3colour() {
  var add = document.getElementsByClassName("studyroom");
  for (var i = 0; i < add.length; i++) {
    add[i].classList.add("blink");
  }
}

// hide functions
function hide() {
  var rem = document.getElementsByClassName("living");
  for (var i = 0; i < rem.length; i++) {
    rem[i].classList.remove("blink");
  }
  setTimeout(() => {
    room2colour();
  }, 1000);
}

function hide2() {
  var rem = document.getElementsByClassName("bedroom");
  for (var i = 0; i < rem.length; i++) {
    rem[i].classList.remove("blink");
  }
  setTimeout(() => {
    room3colour();
  }, 1000);
}

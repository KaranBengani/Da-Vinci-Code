// 1st set of event listeners
var hi = document.getElementsByClassName("living");
for (var i = 0; i < hi.length; i++) {
  hi[i].addEventListener("click", visible1);
}

// popup code

//popup for living room
function visible1() {
  var x = document.getElementById("room1");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//popup for bedroom
function visible2() {
  var x = document.getElementById("room2");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//popup for studyroom
function visible3() {
  var x = document.getElementById("room3");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//popup for storeroom
function visible4() {
  var x = document.getElementById("room4");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//popup for kitchen
function visible5() {
  var x = document.getElementById("room5");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//popup for report
function visible6() {
  var x = document.getElementById("report");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// room to room highlight

// bedroom colour
function room2colour() {
  var add = document.getElementsByClassName("bedroom");
  for (var i = 0; i < add.length; i++) {
    add[i].classList.add("blink");
    add[i].style.cursor = "pointer";
    add[i].addEventListener("click", visible2);
  }
}
//studyroom color
function room3colour() {
  var add = document.getElementsByClassName("studyroom");
  for (var i = 0; i < add.length; i++) {
    add[i].classList.add("blink");
    add[i].style.cursor = "pointer";
    add[i].addEventListener("click", visible3);
  }
}
//storeroom color
function room4colour() {
  var add = document.getElementsByClassName("storeroom");
  for (var i = 0; i < add.length; i++) {
    add[i].classList.add("blink");
    add[i].style.cursor = "pointer";
    add[i].addEventListener("click", visible4);
  }
}
//kitchen room color
function room5colour() {
  var add = document.getElementsByClassName("kitchen");
  for (var i = 0; i < add.length; i++) {
    add[i].classList.add("blink");
    add[i].style.cursor = "pointer";
    add[i].addEventListener("click", visible5);
  }
}

// hide functions

// hide to hide living room
function hide() {
  var rem = document.getElementsByClassName("living");
  for (var i = 0; i < rem.length; i++) {
    rem[i].classList.remove("blink");
    rem[i].removeEventListener("click", visible1);
    rem[i].style.cursor = "auto";
  }
  setTimeout(() => {
    room2colour();
  }, 1000);

  visible1();
}
// hide to hide bed room
function hide2() {
  var rem = document.getElementsByClassName("bedroom");
  for (var i = 0; i < rem.length; i++) {
    rem[i].classList.remove("blink");
    rem[i].removeEventListener("click", visible2);
    rem[i].style.cursor = "auto";
  }
  setTimeout(() => {
    room3colour();
  }, 1000);

  visible2();
}

// hide to hide study room
function hide3() {
  var rem = document.getElementsByClassName("studyroom");
  for (var i = 0; i < rem.length; i++) {
    rem[i].classList.remove("blink");
    rem[i].removeEventListener("click", visible3);
    rem[i].style.cursor = "auto";
  }
  setTimeout(() => {
    room4colour();
  }, 1000);

  visible3();
}

// hide to hide store room
function hide4() {
  var rem = document.getElementsByClassName("storeroom");
  for (var i = 0; i < rem.length; i++) {
    rem[i].classList.remove("blink");
    rem[i].removeEventListener("click", visible4);
    rem[i].style.cursor = "auto";
  }
  setTimeout(() => {
    room5colour();
  }, 1000);

  visible4();
}

// hide to hide kitchen room
function hide5() {
  var rem = document.getElementsByClassName("kitchen");
  for (var i = 0; i < rem.length; i++) {
    rem[i].classList.remove("blink");
    rem[i].removeEventListener("click", visible5);
    rem[i].style.cursor = "auto";
  }
  visible5();
}

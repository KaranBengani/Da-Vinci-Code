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
function hide(livingthis) {
  var rem = document.getElementsByClassName("living");
  for (var i = 0; i < rem.length; i++) {
    rem[i].classList.remove("blink");
    rem[i].removeEventListener("click", visible1);
    rem[i].style.cursor = "auto";
  }
  setTimeout(() => {
    room2colour();
  }, 1000);
  var update1 = livingthis.id;
  update(update1);
  visible1();
}
// hide to hide bed room
function hide2(bedthis) {
  var rem = document.getElementsByClassName("bedroom");
  for (var i = 0; i < rem.length; i++) {
    rem[i].classList.remove("blink");
    rem[i].removeEventListener("click", visible2);
    rem[i].style.cursor = "auto";
  }
  setTimeout(() => {
    room3colour();
  }, 1000);
  var update2 = bedthis.id;
  update(update2);
  visible2();
}

// hide to hide study room
function hide3(studythis) {
  var rem = document.getElementsByClassName("studyroom");
  for (var i = 0; i < rem.length; i++) {
    rem[i].classList.remove("blink");
    rem[i].removeEventListener("click", visible3);
    rem[i].style.cursor = "auto";
  }
  setTimeout(() => {
    room4colour();
  }, 1000);
  var update3 = studythis.id;
  update(update3);
  visible3();
}

// hide to hide store room
function hide4(storethis) {
  var rem = document.getElementsByClassName("storeroom");
  for (var i = 0; i < rem.length; i++) {
    rem[i].classList.remove("blink");
    rem[i].removeEventListener("click", visible4);
    rem[i].style.cursor = "auto";
  }
  setTimeout(() => {
    room5colour();
  }, 1000);
  var update4 = storethis.id;
  update(update4);
  visible4();
}

// hide to hide kitchen room
function hide5(kitchenthis) {
  var rem = document.getElementsByClassName("kitchen");
  for (var i = 0; i < rem.length; i++) {
    rem[i].classList.remove("blink");
    rem[i].removeEventListener("click", visible5);
    rem[i].style.cursor = "auto";
  }
  var update5 = kitchenthis.id;
  update(update5);
  visible5();
}

// Report update functions

// function call after living room
function update(comparison) {
  if (comparison == "livingroomfin") {
    const para1 = document.createElement("p");
    const node1 = document.createTextNode("update from Living room");
    para1.appendChild(node1);
    document.getElementById("reportcontent").appendChild(para1);
  } else if (comparison == "bedroomfin") {
    const para2 = document.createElement("p");
    const node2 = document.createTextNode("update from bed room");
    para2.appendChild(node2);
    document.getElementById("reportcontent").appendChild(para2);
  } else if (comparison == "studyroomfin") {
    const para3 = document.createElement("p");
    const node3 = document.createTextNode("update from study room");
    para3.appendChild(node3);
    document.getElementById("reportcontent").appendChild(para3);
  } else if (comparison == "storeroomfin") {
    const para4 = document.createElement("p");
    const node4 = document.createTextNode("update from store room");
    para4.appendChild(node4);
    document.getElementById("reportcontent").appendChild(para4);
  } else if (comparison == "kitchenfin") {
    const para5 = document.createElement("p");
    const node5 = document.createTextNode("update from Kitchen");
    para5.appendChild(node5);
    document.getElementById("reportcontent").appendChild(para5);
  }
}

// popup code

function visible1() {
  var x = document.getElementById("room1");
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
    add[i].classList.add("blink2");
  }
}

function hide() {
  var rem = document.getElementsByClassName("living");
  for (var i = 0; i < rem.length; i++) {
    rem[i].classList.remove("blink");
  }
  setTimeout(() => {
    room2colour();
  }, 1000);
}

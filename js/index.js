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

//popup for redirdect
function visible7() {
  var x = document.getElementById("redirect");
  x.style.display = "block";
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
  auth2();
}
//studyroom color
function room3colour() {
  var add = document.getElementsByClassName("studyroom");
  for (var i = 0; i < add.length; i++) {
    add[i].classList.add("blink");
    add[i].style.cursor = "pointer";
    add[i].addEventListener("click", visible3);
  }
  auth3();
}
//storeroom color
function room4colour() {
  var add = document.getElementsByClassName("storeroom");
  for (var i = 0; i < add.length; i++) {
    add[i].classList.add("blink");
    add[i].style.cursor = "pointer";
    add[i].addEventListener("click", visible4);
  }
  auth4();
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

  var update1 = "livingroomfin";
  update(update1);
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
  var update2 = "bedroomfin";
  update(update2);
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
  var update3 = "studyroomfin";
  update(update3);
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
  var update4 = "storeroomfin";
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

  setTimeout(() => {
    visible7();
  }, 1000);
}

// Report update functions

// function call after each room
function update(comparison) {
  if (comparison == "livingroomfin") {
    db.collection("Test")
      .get()
      .then((snapshot) => {
        updates(snapshot.docs);
      });
    const updates = (obj) => {
      let p = obj[1].data();
      p = p.Update1;
      const para1 = document.createElement("p");
      const node1 = document.createTextNode(p);
      para1.appendChild(node1);
      document.getElementById("reportcontent").appendChild(para1);
    };
  } else if (comparison == "bedroomfin") {
    db.collection("Test")
      .get()
      .then((snapshot) => {
        updates(snapshot.docs);
      });
    const updates = (obj) => {
      let p = obj[1].data();
      p = p.Update2;
      const para2 = document.createElement("p");
      const node2 = document.createTextNode(p);
      para2.appendChild(node2);
      document.getElementById("reportcontent").appendChild(para2);
    };
  } else if (comparison == "studyroomfin") {
    db.collection("Test")
      .get()
      .then((snapshot) => {
        updates(snapshot.docs);
      });
    const updates = (obj) => {
      let p = obj[1].data();
      p = p.Update3;
      const para3 = document.createElement("p");
      const node3 = document.createTextNode(p);
      para3.appendChild(node3);
      document.getElementById("reportcontent").appendChild(para3);
    };
  } else if (comparison == "storeroomfin") {
    db.collection("Test")
      .get()
      .then((snapshot) => {
        updates(snapshot.docs);
      });
    const updates = (obj) => {
      let p = obj[1].data();
      p = p.Update4;
      console.log(p);
      const para4 = document.createElement("p");
      const node4 = document.createTextNode(p);
      para4.appendChild(node4);
      document.getElementById("reportcontent").appendChild(para4);
    };
  } else if (comparison == "kitchenfin") {
    db.collection("Test")
      .get()
      .then((snapshot) => {
        updates(snapshot.docs);
      });
    const updates = (obj) => {
      let p = obj[1].data();
      p = p.Update5;
      const para5 = document.createElement("p");
      const node5 = document.createTextNode(p);
      para5.appendChild(node5);
      document.getElementById("reportcontent").appendChild(para5);
    };
  }
}

//Riidle auths

//form 1
const form1 = document.getElementById("Form1");
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  const pass1 = form1["password1"].value;
  db.collection("Test")
    .get()
    .then((snapshot) => {
      storeData1(snapshot.docs);
    });
  const storeData1 = (objs) => {
    const dt = objs[0].data();
    if (pass1 == dt.Room1) {
      alert("success");
      hide();
    } else alert("nope");
  };
});

//form 2
function auth2() {
  const form2 = document.getElementById("Form2");
  form2.addEventListener("submit", (e) => {
    e.preventDefault();
    const pass2 = form2["password2"].value;
    db.collection("Test")
      .get()
      .then((snapshot) => {
        storeData2(snapshot.docs);
      });
    const storeData2 = (objs) => {
      const dt = objs[0].data();

      if (pass2 == dt.Room2) {
        alert("success");
        hide2();
      } else alert("nopes");
    };
  });
}
//from 3
function auth3() {
  const form3 = document.getElementById("Form3");
  form3.addEventListener("submit", (e) => {
    e.preventDefault();
    const pass3 = form3["password3"].value;
    db.collection("Test")
      .get()
      .then((snapshot) => {
        storeData1(snapshot.docs);
      });
    const storeData1 = (objs) => {
      const dt = objs[0].data();

      if (pass3 == dt.Room3) {
        alert("success");
        hide3();
      } else alert("nope");
    };
  });
}

//form 4
function auth4() {
  const form4 = document.getElementById("Form4");
  form4.addEventListener("submit", (e) => {
    e.preventDefault();
    const pass4 = form4["password4"].value;
    db.collection("Test")
      .get()
      .then((snapshot) => {
        storeData1(snapshot.docs);
      });
    const storeData1 = (objs) => {
      const dt = objs[0].data();

      if (pass4 == dt.Room4) {
        alert("success");
        hide4();
      } else alert("nope");
    };
  });
}

// FUNCTION FOR OPENING RIDDLE / CP AUTH

const rid1 = document.getElementById("riddle1");
rid1.addEventListener("submit", (e) => {
  e.preventDefault();
  const pass1 = rid1["pass1"].value;
  db.collection("Test")
    .get()
    .then((snapshot) => {
      storeData1(snapshot.docs);
    });
  const storeData1 = (objs) => {
    const dt = objs[0].data();
    if (pass1 == dt.Room1) {
      alert("success");
      document.querySelector(".parent11").style.display = "none";
      document.querySelector(".parent1").style.display = "block";
    } else alert("nope");
  };
});

const rid2 = document.getElementById("riddle2");
rid2.addEventListener("submit", (e) => {
  e.preventDefault();
  const pass1 = rid2["pass2"].value;
  db.collection("Test")
    .get()
    .then((snapshot) => {
      storeData1(snapshot.docs);
    });
  const storeData1 = (objs) => {
    const dt = objs[0].data();
    if (pass1 == dt.Room2) {
      alert("success");
      document.querySelector(".parent21").style.display = "none";
      document.querySelector(".parent2").style.display = "block";
    } else alert("nope");
  };
});
const rid3 = document.getElementById("riddle3");
rid3.addEventListener("submit", (e) => {
  e.preventDefault();
  const pass1 = rid3["pass3"].value;
  db.collection("Test")
    .get()
    .then((snapshot) => {
      storeData1(snapshot.docs);
    });
  const storeData1 = (objs) => {
    const dt = objs[0].data();
    if (pass1 == dt.Room3) {
      alert("success");
      document.querySelector(".parent31").style.display = "none";
      document.querySelector(".parent3").style.display = "block";
    } else alert("nope");
  };
});
const rid4 = document.getElementById("riddle4");
rid4.addEventListener("submit", (e) => {
  e.preventDefault();
  const pass1 = rid4["pass4"].value;
  db.collection("Test")
    .get()
    .then((snapshot) => {
      storeData1(snapshot.docs);
    });
  const storeData1 = (objs) => {
    const dt = objs[0].data();
    if (pass1 == dt.Room4) {
      alert("success");
      document.querySelector(".parent41").style.display = "none";
      document.querySelector(".parent4").style.display = "block";
    } else alert("nope");
  };
});
const rid5 = document.getElementById("riddle5");
rid5.addEventListener("submit", (e) => {
  e.preventDefault();
  const pass1 = rid5["pass5"].value;
  db.collection("Test")
    .get()
    .then((snapshot) => {
      storeData1(snapshot.docs);
    });
  const storeData1 = (objs) => {
    const dt = objs[0].data();
    if (pass1 == dt.Room5) {
      alert("success");
      document.querySelector(".parent51").style.display = "none";
      document.querySelector(".parent5").style.display = "block";
    } else alert("nope");
  };
});
// const riddlefroms = document.querySelectorAll(".riddleform");
// var id1 = " ";
// var id2 = " ";
// var id3 = " ";
// var id4 = " ";
// var id5 = " ";
// for (let k = 0; k < 5; k++) {
//   riddlefroms[k].addEventListener("submit", (e) => {
//     e.preventDefault();
//     id1 = document.getElementById("pass1").value;
//     id2 = document.getElementById("pass2").value;
//     id3 = document.getElementById("pass3").value;
//     id4 = document.getElementById("pass4").value;
//     id5 = document.getElementById("pass5").value;

//     db.collection("Test")
//       .get()
//       .then((snapshot) => {
//         riddledata(snapshot.docs);
//       });
//     const riddledata = (array) => {
//       let data = array[0].data();
//       if (id1 == data.Room1) {
//       } else if (id1 != " " && id1 != data.Room1) {
//         alert("NO");
//         console.log("1");
//       }

//       if (id2 == data.Room2) {
//         document.querySelector(".parent21").style.display = "none";
//         document.querySelector(".parent2").style.display = "block";
//         console.log("bleeh");
//       } else if (id2 != " " && id2 != data.Room2) {
//         alert("NO");
//         console.log("2");
//       }

//       if (id3 == data.Room3) {
//         document.querySelector(".parent31").style.display = "none";
//         document.querySelector(".parent3").style.display = "block";
//       } else if (id3 != " " && id3 != data.Room3) {
//         alert("NO");
//         console.log("3");
//       }

//       if (id4 == data.Room4) {
//         document.querySelector(".parent41").style.display = "none";
//         document.querySelector(".parent4").style.display = "block";
//       } else if (id4 != " " && id4 != data.Room4) {
//         alert("NO");
//         console.log("4");
//       }

//       if (id5 == data.Room5) {
//         document.querySelector(".parent51").style.display = "none";
//         document.querySelector(".parent5").style.display = "block";
//       } else if (id5 != " " && id5 != data.Room4) {
//         alert("NO");
//         console.log("5");
//       }
//     };
//   });
// }

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyApb7dWwDh4u31z44SL9cOoZespeuH9zW0",
  authDomain: "da-vinci-code-auth.firebaseapp.com",
  projectId: "da-vinci-code-auth",
  storageBucket: "da-vinci-code-auth.appspot.com",
  messagingSenderId: "931364964224",
  appId: "1:931364964224:web:2ae6add01fefb2eed52365",
  measurementId: "G-5KBELPGLNW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//firestore references
const db = firebase.firestore();

//update settings
db.settings({ timestampsInSnapshots: true });

// 1st set of event listeners
function room1colour() {
  var hi = document.getElementsByClassName("kitchen");
  for (var i = 0; i < hi.length; i++) {
    hi[i].addEventListener("click", visible1);
    hi[i].classList.add("blink");
    hi[i].style.cursor = "pointer";
  }
  document.querySelector(".cliphide").style.display = "block";
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
  var add = document.getElementsByClassName("living");
  for (var i = 0; i < add.length; i++) {
    add[i].classList.add("blink");
    add[i].style.cursor = "pointer";
    add[i].addEventListener("click", visible5);
  }
}

// hide functions

// hide to hide kitchen room
function hide() {
  var rem = document.getElementsByClassName("kitchen");
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

// hide to hide living room
function hide5(kitchenthis) {
  var rem = document.getElementsByClassName("living");
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
    db.collection("Final")
      .get()
      .then((snapshot) => {
        updates(snapshot.docs);
      });
    const updates = (obj) => {
      let p = obj[0].data();
      let a = document.querySelectorAll(".h11");
      for (let i = 0; i < 3; i++) {
        a[i].style.display = "block";
      }
      document.getElementById("p11").innerHTML = p.living1;
      document.getElementById("p12").innerHTML = p.living2;
    };
  } else if (comparison == "bedroomfin") {
    db.collection("Final")
      .get()
      .then((snapshot) => {
        updates(snapshot.docs);
      });
    const updates = (obj) => {
      let p = obj[0].data();
      document.querySelector(".h21").style.display = "block";
      document.getElementById("p21").innerHTML = p.bed1;
      document.getElementById("p22").innerHTML = p.bed2;
    };
  } else if (comparison == "studyroomfin") {
    db.collection("Final")
      .get()
      .then((snapshot) => {
        updates(snapshot.docs);
      });
    const updates = (obj) => {
      let p = obj[0].data();
      document.querySelector(".h31").style.display = "block";
      document.getElementById("p31").innerHTML = p.study1;
      document.getElementById("p32").innerHTML = p.study2;
    };
  } else if (comparison == "storeroomfin") {
    db.collection("Final")
      .get()
      .then((snapshot) => {
        updates(snapshot.docs);
      });
    const updates = (obj) => {
      let p = obj[0].data();
      document.querySelector(".h41").style.display = "block";
      document.getElementById("p41").innerHTML = p.store1;
      document.getElementById("p42").innerHTML = p.store2;
    };
  } else if (comparison == "kitchenfin") {
    db.collection("Final")
      .get()
      .then((snapshot) => {
        updates(snapshot.docs);
      });
    const updates = (obj) => {
      let p = obj[0].data();
      document.querySelector(".h51").style.display = "block";
      document.getElementById("p51").innerHTML = p.kitchen1;
      document.getElementById("p52").innerHTML = p.kitchen2;
    };
  }
}

//Riidle auths

//form 1 for kitchen
const form1 = document.getElementById("Form1");
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  const pass1 = form1["password1"].value;
  db.collection("Final")
    .get()
    .then((snapshot) => {
      storeData1(snapshot.docs);
    });
  const storeData1 = (objs) => {
    const dt = objs[1].data();
    if (pass1 == dt.kitchen) {
      hide();
    } else alert("Sorry your answer is incorrect!! Please try again");
  };
});

//form 2
function auth2() {
  const form2 = document.getElementById("Form2");
  form2.addEventListener("submit", (e) => {
    e.preventDefault();
    const pass2 = form2["password2"].value;
    db.collection("Final")
      .get()
      .then((snapshot) => {
        storeData2(snapshot.docs);
      });
    const storeData2 = (objs) => {
      const dt = objs[1].data();

      if (pass2 == dt.bed) {
        hide2();
      } else alert("Sorry your answer is incorrect!! Please try agains");
    };
  });
}
//from 3
function auth3() {
  const form3 = document.getElementById("Form3");
  form3.addEventListener("submit", (e) => {
    e.preventDefault();
    const pass3 = form3["password3"].value;
    db.collection("Final")
      .get()
      .then((snapshot) => {
        storeData1(snapshot.docs);
      });
    const storeData1 = (objs) => {
      const dt = objs[1].data();

      if (pass3 == dt.study) {
        hide3();
      } else alert("Sorry your answer is incorrect!! Please try again");
    };
  });
}

//form 4
function auth4() {
  const form4 = document.getElementById("Form4");
  form4.addEventListener("submit", (e) => {
    e.preventDefault();
    const pass4 = form4["password4"].value;
    db.collection("Final")
      .get()
      .then((snapshot) => {
        storeData1(snapshot.docs);
      });
    const storeData1 = (objs) => {
      const dt = objs[1].data();

      if (pass4 == dt.store) {
        hide4();
      } else alert("Sorry your answer is incorrect!! Please try again");
    };
  });
}

// FUNCTION FOR OPENING RIDDLE / CP AUTH
const rid = document.getElementById("riddle");
rid.addEventListener("submit", (e) => {
  e.preventDefault();
  const pass1 = rid["pass"].value;
  db.collection("Final")
    .get()
    .then((snapshot) => {
      storeData1(snapshot.docs);
    });
  const storeData1 = (objs) => {
    const dt = objs[1].data();
    if (pass1 == dt.open) {
      document.querySelector("#room").style.display = "none";
      setTimeout(() => {
        document.querySelector(".cliphide").style.display = "block";
        room1colour();
      }, 1500);
    } else alert("Sorry your answer is incorrect!! Please try again");
  };
});

const rid1 = document.getElementById("riddle1");
rid1.addEventListener("submit", (e) => {
  e.preventDefault();
  const pass1 = rid1["pass1"].value;
  db.collection("Final")
    .get()
    .then((snapshot) => {
      storeData1(snapshot.docs);
    });
  const storeData1 = (objs) => {
    const dt = objs[2].data();
    if (pass1 == dt.wife) {
      document.querySelector(".parent11").style.display = "none";
      document.querySelector(".parent1").style.display = "block";
    } else alert("Sorry your answer is incorrect!! Please try again");
  };
});

const rid2 = document.getElementById("riddle2");
rid2.addEventListener("submit", (e) => {
  e.preventDefault();
  const pass1 = rid2["pass2"].value;
  db.collection("Final")
    .get()
    .then((snapshot) => {
      storeData1(snapshot.docs);
    });
  const storeData1 = (objs) => {
    const dt = objs[2].data();
    if (pass1 == dt.father) {
      document.querySelector(".parent21").style.display = "none";
      document.querySelector(".parent2").style.display = "block";
    } else alert("Sorry your answer is incorrect!! Please try again");
  };
});
const rid3 = document.getElementById("riddle3");
rid3.addEventListener("submit", (e) => {
  e.preventDefault();
  const pass1 = rid3["pass3"].value;
  db.collection("Final")
    .get()
    .then((snapshot) => {
      storeData1(snapshot.docs);
    });
  const storeData1 = (objs) => {
    const dt = objs[2].data();
    if (pass1 == dt.pa) {
      document.querySelector(".parent31").style.display = "none";
      document.querySelector(".parent3").style.display = "block";
    } else alert("Sorry your answer is incorrect!! Please try again");
  };
});
const rid4 = document.getElementById("riddle4");
rid4.addEventListener("submit", (e) => {
  e.preventDefault();
  const pass1 = rid4["pass4"].value;
  db.collection("Final")
    .get()
    .then((snapshot) => {
      storeData1(snapshot.docs);
    });
  const storeData1 = (objs) => {
    const dt = objs[2].data();
    if (pass1 == dt.brother) {
      document.querySelector(".parent41").style.display = "none";
      document.querySelector(".parent4").style.display = "block";
    } else alert("Sorry your answer is incorrect!! Please try again");
  };
});
const rid5 = document.getElementById("riddle5");
rid5.addEventListener("submit", (e) => {
  e.preventDefault();
  const pass1 = rid5["pass5"].value;
  db.collection("Final")
    .get()
    .then((snapshot) => {
      storeData1(snapshot.docs);
    });
  const storeData1 = (objs) => {
    const dt = objs[2].data();
    if (pass1 == dt.son) {
      document.querySelector(".parent51").style.display = "none";
      document.querySelector(".parent5").style.display = "block";
    } else alert("Sorry your answer is incorrect!! Please try again");
  };
});

// link to compiler
// var compiler = document.querySelectorAll(".compiler");
// for(let i = 0 ; i<3 ; i++){
//   compiler[i].addEventListener("click", () =>{
//     window.open("","_blank");
//   })
// }

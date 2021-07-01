// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAGT7XZu1AXkHkDQGACrgC82raB4mbd3Cg",
  authDomain: "submission-form-29222.firebaseapp.com",
  projectId: "submission-form-29222",
  storageBucket: "submission-form-29222.appspot.com",
  messagingSenderId: "157921664061",
  appId: "1:157921664061:web:ff74b9edcb23534e93de54",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const DB = firebase.firestore();
DB.settings({ timestampsInSnapshots: true });

function getVal(id) {
  return document.getElementById(id).value;
}

// form submissions
const form = document.getElementById("submission");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var name = getVal("inputname4");
  var email = getVal("inputEmail4");
  var reg = getVal("inputname3");
  var dept = getVal("inputdept");
  var mob = getVal("inputnumber");
  var year = getVal("inputyear");
  var answer = getVal("inputSuspect");
  var explanation = getVal("justi");
  pushData(name, email, reg, dept, mob, year, answer, explanation);
  console.log(name, email, reg, dept, mob, year, answer, explanation);
});

function pushData(name, email, reg, dept, mob, year, answer, explanation) {
  DB.collection("Responses")
    .doc()
    .set({
      Fullname: name,
      Email: email,
      Registeration_Number: reg,
      Department: dept,
      Mobile_Number: mob,
      Year: year,
      Suspect: answer,
      Justification: explanation,
      created: firebase.firestore.Timestamp.now(),
    })
    .then(() => {
      alert(
        "Your response has been submited. You will now be redirected to our website , do check it out and follow us on our social media handles to stay updated. All the best!!"
      );
      setTimeout(() => {
        jump();
      }, 2000);
    });
}

//vivble function
function visible6() {
  var x = document.getElementById("report");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// jump to gccatsrm.tech
function jump() {
  window.location.replace("https://www.gccatsrm.tech/");
}

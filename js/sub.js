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
  DB.collection("Responses").doc().set({
    Fullname: name,
    Email: email,
    Registeration_Number: reg,
    Department: dept,
    Mobile_Number: mob,
    Year: year,
    Suspect: answer,
    Justification: explanation,
    created: firebase.firestore.Timestamp.now(),
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

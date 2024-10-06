function submitonclick() {
  const getedFname = document.getElementById("fName").value;
  const getedMarks = document.getElementById("marks").value;

  checkMarks(getedFname, getedMarks);
}

function checkMarks(fName, marks) {
  if (marks > 60) {
    document.getElementById("display").innerText = fName + " is Passed ";
  } else {
    document.getElementById("display").innerText = fName + " is Fail ";
  }
}

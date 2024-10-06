const uName = "AdMin";
const uPass = "admin123";

function loginSubmit() {
  const inUser = document.getElementById("inUser").value;
  const inPass = document.getElementById("inPass").value;

  if (uName === inUser) {
    // Corrected the equality operator
    if (uPass === inPass) {
      document.getElementById("errDisplay").innerText =
        "Login Success";
      document.getElementById("errDisplay").style.color = "green";
    } else {
      document.getElementById("errDisplay").innerText = "Invalid Password";
      document.getElementById("errDisplay").style.color = "red";
    }
  } else {
    document.getElementById("errDisplay").innerText =
      "Login Fail : Invalid User Name";
    document.getElementById("errDisplay").style.color = "red";
  }
}

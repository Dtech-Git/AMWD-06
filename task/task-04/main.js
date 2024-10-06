function genarate() {
  const getedVal = document.getElementById("textInput").value;
  const letterRegex = /^[a-z]+$/;

  if (letterRegex.test(getedVal)) {
    let displayText;
    if (getedVal == "intern") {
      displayText = "Intern Software Engineer";
    } else if (getedVal == "ase") {
      displayText = "Associate Software Engineer";
    } else if (getedVal == "se") {
      displayText = "Software Engineer";
    } else if (getedVal == "sse") {
      displayText = "Senior Software Engineer";
    } else if (getedVal == "atl") {
      displayText = "Assistent Tech Lead";
    } else if (getedVal == "tl") {
      displayText = "Tech Lead";
    } else {
      displayText = "Error Key Word";
    }

    document.getElementById("display").innerText = displayText;
  } else {
    document.getElementById("display").innerText =
      "Error Input: You can input simple letters only.";
  }
}

const randomNumArr = [];
for (let i = 0; i < 100; i++) {
  const randomNum = Math.floor(Math.random() * 100);
  randomNumArr[i] = randomNum;
  document.getElementById("display").innerText = randomNumArr;
}

function randomFilter() {
  const result = [];
  const textVal = document.getElementById("modInput").value;
  for (let j = 0; j < 100; j++) {
    if (randomNumArr[j] % textVal == 0) {
      result.push(randomNumArr[j]);
    }
  }
  document.getElementById("displayMod").innerText = result;
}

let count = 0;

function tickUp() {
  count++;
  document.getElementById("counter").textContent = count;
}

function tickDown() {
  count--;
  document.getElementById("counter").textContent = count;
}

function runForLoop() {
  let output = "";
  for (let i = 0; i <= count; i++) {
    output += i + " ";
  }
  document.getElementById("forLoopResult").textContent = output;
}

function showOddNumbers() {
  let output = "";
  for (let i = 0; i <= count; i++) {
    if (i % 2 === 1) {
      output += i + " ";
    }
  }
  document.getElementById("oddNumberResult").textContent = output;
}

function addMultiplesToArray() {
  let multiples = [];

  for (let i = 5; i <= count; i += 5) {
    multiples.push(i);
  }
  multiples.reverse();
  console.log(multiples);
}

function printCarObject() {
  let type = document.getElementById("carType").value;
  let mpg = document.getElementById("carMPG").value;
  let color = document.getElementById("carColor").value;
  let car = {
    cType: type,
    cMPG: mpg,
    cColor: color,
  };
  console.log(car);
}

function loadCar(number) {
  let car;
  if (number === 1) car = carObject1;
  else if (number === 2) car = carObject2;
  else if (number === 3) car = carObject3;
  else return;
  document.getElementById("carType").value = car.cType;
  document.getElementById("carMPG").value = car.cMPG;
  document.getElementById("carColor").value = car.cColor;
}

function changeColor(number) {
  const paragraph = document.getElementById("styleParagraph");
  let color = "";
  switch (number) {
    case 1:
      color = "red";
      break;
    case 2:
      color = "green";
      break;
    case 3:
      color = "blue";
      break;
    default:
      color = "black";
  }
  paragraph.style.color = color;
}

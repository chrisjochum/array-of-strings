const mainDiv = document.getElementById("main");

class BlockButton {
  constructor(text, id) {
  this.text = text;
  this.id = id;
  }
  createButton: () => {
  let button = document.createElement("button");
  button.className = "block";
  button.id = this.id;
  button.innerText = this.text;
  
  }
  change: () => {
  {
  let button = document.getElementsByClassName("block")
        if (button.innerText === "W") {
          colButton.innerText = "E";
          colButton.style.backgroundColor = "slategray";
          colButton.style.color = "black";
        } else if (colButton.innerText === "E") {
          colButton.innerText = "C";
          colButton.style.backgroundColor = "gold";
        } else if (colButton.innerText === "C") {
          colButton.innerText = "S";
          colButton.style.backgroundColor = "purple";
        } else if (colButton.innerText === "S") {
          colButton.innerText = "F";
          colButton.style.backgroundColor = "red";
        } else if (colButton.innerText === "F") {
          colButton.innerText = "A";
          colButton.style.backgroundImage = "linear-gradient(red, yellow)";
        } else if (colButton.innerText === "A") {
          colButton.innerText = "N";
          colButton.style.backgroundImage =
            "linear-gradient(slategray, purple)";
        } else {
          colButton.innerText = "W";
          colButton.style.backgroundImage = "";
          colButton.style.backgroundColor = "black";
          colButton.style.color = "white";
        }
      }
  }
  addListener: () => {
  let button = document.getElementById(this.id);
  button.addEventListener("click", this.change) {}
  }
  }
  

let inputType = {
  style: "mouseover",
  change: () => {
    if (inputType.style === "mouseover") {
      inputType.style = "click";
    } else {
      inputType.style = "mouseover";
    }
    createButtons();
  },
};

const createButtons = function (rowNum, colNum) {
  for (let row = 1; row <= rowNum; row++) {
    let rowDiv = document.createElement("div");
    rowDiv.className = "row";
    // rowDiv.id = "row" + `${row}`;

    for (let col = 1; col <= colNum; col++) {
      // W is for wall, E is for empty, S is for start, F is for finish,
      // C is for chest, A is for campsite, N is for new layout
      let colButton = document.createElement("button");
      colButton.className = "block";
      colButton.id = "block" + `${row},${col}`;
      colButton.innerText = "W";
      colButton.addEventListener("click", function () {
        if (colButton.innerText === "W") {
          colButton.innerText = "E";
          colButton.style.backgroundColor = "slategray";
          colButton.style.color = "black";
        } else if (colButton.innerText === "E") {
          colButton.innerText = "C";
          colButton.style.backgroundColor = "gold";
        } else if (colButton.innerText === "C") {
          colButton.innerText = "S";
          colButton.style.backgroundColor = "purple";
        } else if (colButton.innerText === "S") {
          colButton.innerText = "F";
          colButton.style.backgroundColor = "red";
        } else if (colButton.innerText === "F") {
          colButton.innerText = "A";
          colButton.style.backgroundImage = "linear-gradient(red, yellow)";
        } else if (colButton.innerText === "A") {
          colButton.innerText = "N";
          colButton.style.backgroundImage =
            "linear-gradient(slategray, purple)";
        } else {
          colButton.innerText = "W";
          colButton.style.backgroundImage = "";
          colButton.style.backgroundColor = "black";
          colButton.style.color = "white";
        }
      });

      rowDiv.append(colButton);
    }
    mainDiv.append(rowDiv);
  }
};

let createArray = function (rowNum, colNum) {
  let array = [];
  for (let row = 1; row <= rowNum; row++) {
    let string = "";
    // let rowDiv = document.getElementById("row" + `${i}`);
    for (let col = 1; col <= colNum; col++) {
      let letter = document.getElementById("block" + `${row},${col}`);
      string += letter.innerText;
    }
    array.push(string);
  }
  console.log(array);
  return array;
};

createButtons(30, 30);
createArray(30, 30);

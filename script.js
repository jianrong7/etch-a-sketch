const container = document.getElementById("container");
const blackButton = document.getElementById("black");
const colorButton = document.getElementById("color");
const grayButton = document.getElementById("gray");
const resetButton = document.getElementById("size");
const eraserButton = document.getElementById("eraser");
const gridItems = document.querySelectorAll(".grid-item");

function makeRows(rows, cols) {
  //const grid = gridSize.value ** 2;
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
      cell.classList.add('grid-item')
      let squareHeightAndWidth = 480 / rows;

      cell.style.height = squareHeightAndWidth + 'px'
      cell.style.width = squareHeightAndWidth + 'px'

      container.appendChild(cell);
  }
}

function blackColor() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
      gridItem.addEventListener("mouseover", function(e) {
          gridItem.style.backgroundColor = 'black';
      });
  });
}

function color() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
      gridItem.addEventListener("mouseover", function(e) {
          gridItem.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
      });
  });
}

function grayColor() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
      gridItem.addEventListener("mouseover", function(e) {
          let opacity = Number(gridItem.style.opacity);
          gridItem.style.opacity = opacity += 0.1;
          gridItem.style.backgroundColor = "black";
      });
  });
}

function eraser() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", function(e) {
      gridItem.style.backgroundColor = "white";
    })
  })
}

function resize(){
  let rows = prompt("What grid size do you want?")
  let cols = rows;
  makeRows(rows, cols);
  blackColor();
  blackButton.addEventListener("click", function(){
    container.innerHTML = "";
    makeRows(rows, cols);
    blackColor();
  });

  colorButton.addEventListener("click", function(){
    container.innerHTML = "";
    makeRows(rows, cols);
    color();
  });

  grayButton.addEventListener("click", function(){
    container.innerHTML = "";
    makeRows(rows, cols);
    grayColor();
  });
}

function reset(e) {
  container.innerHTML = "";
  makeRows(16,16);
}

const btns = document.querySelectorAll('.btn')

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    container.innerHTML = ''
    makeRows(16,16)
    const identity = e.target.id
    if (identity == 'black') {
      blackColor()
    } else if (identity == 'color') {
      color()
    } else if (identity == 'gray') {
      grayColor()
    } else if (identity == 'eraser') {
      eraser()
    } else {
      resize()
    }
  })
})

makeRows(16, 16);
blackColor();
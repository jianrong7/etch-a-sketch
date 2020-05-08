const container = document.getElementById("container");
const blackButton = document.getElementById("black");
const colorButton = document.getElementById("color");
const grayButton = document.getElementById("gray");
const resetButton = document.getElementById("size");
const gridItems = document.querySelectorAll(".grid-item");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.classList.add("grid-item")
    container.appendChild(cell)
  };
};

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

blackButton.addEventListener("click", function(){
  container.innerHTML = "";
  makeRows(16,16);
  blackColor();
});

colorButton.addEventListener("click", function(){
  container.innerHTML = "";
  makeRows(16,16);
  color();
});

grayButton.addEventListener("click", function(){
  container.innerHTML = "";
  makeRows(16,16);
  grayColor();
});

resetButton.addEventListener("click", function(){
  container.innerHTML = "";
  resize();
});

makeRows(16, 16);
blackColor();
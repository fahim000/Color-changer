function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215);
  const hexColor = randomColor.toString(16);
  return '#' + hexColor;
}

const btn = document.getElementById("btn");
const colorCodeElement = document.getElementById("colorCode");

btn.addEventListener("click", function() {
  const newColor = getRandomColor();
  btn.style.backgroundColor = newColor;

  
  colorCodeElement.innerHTML = 'Generated Color Code: ' + newColor;
});
const VEGETABLE_SIZE = 80;

const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();

const initGame = () => {
  addItem("carrot", 5, "../img/vegetable.png");
  addItem("bug", 5, "../img/bug.png");
};

const addItem = (className, count, imgPath) => {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - VEGETABLE_SIZE;
  const y2 = fieldRect.height - VEGETABLE_SIZE;
  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.style.position = "absolute";
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
};

const randomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

initGame();

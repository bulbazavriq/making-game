import "./styles.css";

const canvas = document.querySelector("#app");
const container = document.body;
const cWidth = container.clientWidth;
const cHeight = container.clientHeight;

const blue = "rgb(0, 200, 200)";

canvas.width = cWidth;
canvas.height = cHeight;

const ctx = canvas.getContext("2d");

let x = cWidth / 2;
let y = cHeight / 2;

const step = 15;
const width = 20;

const getCoordinates = () => {
  return [x - width / 2, y - width / 2, width, width];
};

const renderField = ctx => {
  // Очистим поле
  ctx.clearRect(0, 0, 1000, 1000);
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(0, 0, 1000, 1000);

  // Колобок, квадратный
  ctx.fillStyle = blue;
  ctx.fillRect(...getCoordinates());
};

renderField(ctx);

document.addEventListener("keydown", e => {
  switch (e.key) {
    case "a":
      x = x - step;
      break;

    case "s":
      y = y + step;
      break;

    case "d":
      x = x + step;
      break;

    case "w":
      y = y - step;
      break;

    default:
  }

  renderField(ctx);
});

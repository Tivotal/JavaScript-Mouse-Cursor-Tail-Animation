/* Created by Tivotal */

let circles = document.querySelectorAll(".circle");

let x = 0,
  y = 0;

circles.forEach((circle) => {
  circle.x = 0;
  circle.y = 0;
});

let animCircles = () => {
  circles.forEach((circle, index) => {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.x = x;
    circle.y = y;

    let nxtCircle = circles[index + 1] || circles[0];

    x += (nxtCircle.x - x) * 0.3;
    y += (nxtCircle.y - y) * 0.3;

    circle.style.scale = (circles.length - index) / circles.length;
  });

  requestAnimationFrame(animCircles);
};

animCircles();

window.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;

  circles.forEach((circle, index) => {
    circle.style.opacity = 1;

    circle.style.background = clrs[index % clrs.length];
  });
});

window.addEventListener("mouseout", () => {
  circles.forEach((circle) => {
    circle.style.opacity = 0;
  });
});

let clrs = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",
];

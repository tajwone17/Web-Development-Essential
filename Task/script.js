const handleSubmit = () => {
  let txt = document.getElementById("name").value;
  alert(txt);
};
// document.addEventListener("DOMContentLoaded", function () {
//   const h1 = document.createElement("h1");
//   h1.textContent = "h3";
//   document.div.appendChild(h1);
// });

document.addEventListener("DOMContentLoaded", function () {
  const myDiv = document.querySelector(".dv");
  const newElement = document.createElement("h1");
  newElement.className = "new";
  newElement.textContent = "h3";
  myDiv.appendChild(newElement);
});
// document.addEventListener("DOMContentLoaded", function () {
//   const n = document.querySelector(".new");
//   n.remove();
// });

// const handleSubmit = () => {
//   let txt = document.getElementById("name").value;
//   alert(txt);
// };
// // document.addEventListener("DOMContentLoaded", function () {
// //   const h1 = document.createElement("h1");

// //   h1.textContent = "h3";
// //   document.div.appendChild(h1);
// // });

// document.addEventListener("DOMContentLoaded", function () {
//   const myDiv = document.querySelector(".dv");
//   const newElement = document.createElement("h1");
//   newElement.className = "new";
//   newElement.textContent = "h3";
//   myDiv.appendChild(newElement);
// });
// // document.addEventListener("DOMContentLoaded", function () {
//   const n = document.querySelector(".new");
//   n.remove();
// });
// fetch("j.json")
//   .then((response) => response.json())
//   .then((studentsData) => {
//     console.log(studentsData.students);

//     console.log(studentsData.students[0].name);

//     console.log(studentsData.students[0].Friends[0].phone);
//   })
//   .catch((err) => {
//     console.error("Error loading the file:", err);
//   });
const dt = require("./j.json");
console.log(dt);
console.log(dt.students[1].Friends[0].name);

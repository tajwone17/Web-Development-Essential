// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("student-form");

//   form.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const firstname = document.getElementById("firstname").value;
//     const middlename = document.getElementById("middlename").value;
//     const lastname = document.getElementById("lastname").value;

//     const studentData = { firstname, middlename, lastname };

//     try {
//       const response = await fetch("http://localhost:3000/api/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(studentData),
//       });

//       if (response.ok) {
//         alert("Form submitted successfully!");
//         form.reset();
//       } else {
//         alert("Failed to submit form.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred.");
//     }
//   });
// });

// AFFICHER TOUTES LES BLAGUES POUR TESTER DANS LA CONSOLE
// fetch("https://blaguecarambar.onrender.com/api/v1/blagues")
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(joke => {
//       console.log(joke.blague);
//     });
//   })
//   .catch(error => {
//     console.error("Une erreur s'est produite:", error);
//   });
const button = document.querySelector("button");
const result = document.getElementById("result");

function displayRandomJoke() {
  fetch("https://blaguecarambar.onrender.com/api/v1/blagues")
    .then((response) => response.json())
    .then((data) => {
      const randomJoke = data[Math.floor(Math.random() * data.length)];
      const resultDiv = document.getElementById("result");
      resultDiv.textContent = randomJoke.blague;
    })
    .catch((error) => {
      console.error("Une erreur s'est produite :", error);
    });
}

button.addEventListener("click", () => {
  displayRandomJoke();
  result.style.height = "100px";
});

const joke__btn = document.querySelector(".joke__btn");
const joke__title = document.querySelector(".joke__title");

const url = "http://api.icndb.com/jokes/random";

joke__btn.addEventListener("click", getJoke);

async function getJoke() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    joke__title.innerHTML = data.value.joke;
  } catch (error) {
    joke__title.innerHTML = "Not Found";
  }
}
getJoke();

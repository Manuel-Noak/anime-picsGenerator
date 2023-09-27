const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async () => {
  const api = "https://catboys.com/api/img";
  try {
    btnEl.disabled = true;
    btnEl.innerHTML = "Loading...";
    animeImgEl.src = "spinner.svg";
    const response = await fetch(api);
    const data = await response.json();
    animeContainerEl.style.display = "block";
    animeImgEl.src = data.url;
    animeNameEl.innerHTML = data.artist;
    btnEl.disabled = false;
    btnEl.innerHTML = "Get Anime";
  } catch (error) {
    btnEl.disabled = false;
    animeNameEl.innerHTML = "An error happen";
    btnEl.innerHTML = "Get Anime";
  }
});

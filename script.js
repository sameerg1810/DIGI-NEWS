const container = document.querySelector(".main-container");
const crypto = document.querySelector(".crypto");
const navbarContainer = document.querySelector(".navbar");
const sportsContainer = document.querySelector(".sports");
const moviesContainer = document.querySelector(".movies");

function navbar() {
  const cardd = document.createElement("div");
  cardd.classList.add("cardd");

  const btn = document.createElement("button");
  btn.innerHTML = "HOME";
  btn.style.margin = "0 5rem";
  // btn.addEventListener("click", () => {
  crypto.classList.remove("hide");
  sportsContainer.classList.remove("hide");
  moviesContainer.classList.remove("hide");
  // } );

  const button = document.createElement("button");
  button.innerHTML = "CRYPTO";
  button.style.margin = "0 10rem";
  button.addEventListener("click", () => {
    crypto.classList.remove("hide");
    sportsContainer.classList.add("hide");
    moviesContainer.classList.add("hide");
  });

  const button1 = document.createElement("button");
  button1.style.margin = "0 10rem";
  button1.innerHTML = "SPORTS";
  button1.addEventListener("click", () => {
    crypto.classList.add("hide");
    sportsContainer.classList.remove("hide");
    moviesContainer.classList.add("hide");
  });

  const button2 = document.createElement("button");
  button2.style.margin = "0 10rem";
  button2.innerHTML = "MOVIES";
  button2.addEventListener("click", () => {
    crypto.classList.add("hide");
    sportsContainer.classList.add("hide");
    moviesContainer.classList.remove("hide");
  });

  cardd.appendChild(btn);
  cardd.appendChild(button);
  cardd.appendChild(button1);
  cardd.appendChild(button2);
  navbarContainer.appendChild(cardd);
}

navbar();
getSportsData();
getCryptoData();
getMoviesData();

function getCryptoData() {
  fetch(
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=e10d5fde840f41d69ae9c347dd0cbe6d"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      createCryptoCard(data.articles);
    });
}
//   getCryptoData()

function createCryptoCard(apiData) {
  apiData.forEach((bitcoin) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = bitcoin.urlToImage;

    const heading = document.createElement("h2");
    heading.innerHTML = bitcoin.author;

    const heading1 = document.createElement("h3");
    heading1.innerHTML = bitcoin.title;

    const para = document.createElement("para");
    para.innerHTML = bitcoin.description;

    card.appendChild(image);
    card.appendChild(heading);
    card.appendChild(heading1);
    card.appendChild(para);

    crypto.appendChild(card);
  });
}

function getSportsData() {
  fetch(
    "https://newsapi.org/v2/everything?q=sports&apiKey=e10d5fde840f41d69ae9c347dd0cbe6d"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      createSportsCard(data.articles);
    });
}
//   getSportsData()

function createSportsCard(apiData) {
  apiData.forEach((sport) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = sport.urlToImage;

    const heading = document.createElement("h2");
    heading.innerHTML = sport.source.name;

    const heading1 = document.createElement("h3");
    heading1.innerHTML = sport.title;

    const para = document.createElement("p");
    para.innerHTML = sport.description;

    card.appendChild(image);
    card.appendChild(heading);
    card.appendChild(heading1);
    card.appendChild(para);

    sportsContainer.appendChild(card);
  });
}

function getMoviesData() {
  fetch(
    "https://newsapi.org/v2/everything?q=entertainment&apiKey=e10d5fde840f41d69ae9c347dd0cbe6d"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      createMoviescard(data.articles);
    });
}
//   getMoviesData()

function createMoviescard(apiData) {
  apiData.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = movie.urlToImage;

    const heading = document.createElement("h2");
    heading.innerHTML = movie.source.name;

    const heading1 = document.createElement("h3");
    heading1.innerHTML = movie.title;

    const para = document.createElement("p");
    para.innerHTML = movie.description;

    card.appendChild(image);
    card.appendChild(heading);
    card.appendChild(heading1);
    card.appendChild(para);

    moviesContainer.appendChild(card);
  });
}

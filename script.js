//ключ
let key = "7f1e5f00";
//Айди фильмов
let movieIds = [
  "tt0468569",
  "tt1375666",
  "tt1345836",
  "tt0111161",
  "tt0499549",
  "tt6320628",
  "tt4154664",
  "tt3501632",
  "tt7286456",
  "tt0848228",
];

//ссылка фильмов
let url0 = `http://www.omdbapi.com/?i=${movieIds[0]}&apikey=${key}&lang=ru`;
// let url1 = `http://www.omdbapi.com/?i=${movieIds[1]}&apikey=${key}&lang=ru`;

//начало слайдера
let currentIndex = 0;

//DOM
let $poster = document.querySelector("#poster");
let $title = document.querySelector("#title");
let $h2 = document.querySelector("h2");
let $released = document.querySelector("#released");
let $runtime = document.querySelector("#runtime");
let $raitings = document.querySelector("#raitings");
let $previous = document.querySelector("#previous");
let $next = document.querySelector("#next");
let $form = document.querySelector("form");
let $select = document.querySelector("select");

//получение данных от data и выведение на экран
function otherCinema(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      $poster.src = data.Poster;
      $title.innerHTML = data.Title;
      $released.innerHTML = data.Released;
      $runtime.innerHTML = data.Runtime;
      $raitings.innerHTML = data.Ratings[0].Value;
    });
}

// фильм по умолчанию
otherCinema(url0);
// otherCinema(url1)

//слайдер
function sliderOther() {
  currentIndex = (currentIndex + 1) % movieIds.length;
  let url = `http://www.omdbapi.com/?i=${movieIds[currentIndex]}&apikey=${key}&lang=ru`;
  otherCinema(url);
}
//предыдущий фильмы
$previous.addEventListener("click", sliderOther);

//следующий фильм
$next.addEventListener("click", sliderOther);

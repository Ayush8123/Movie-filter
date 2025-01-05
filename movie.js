const movies = [
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 9.3,
    image: "movie1.png",
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
    image: "movie2.png",
  },
  { title: "Inception", genre: "Sci-Fi", rating: 8.8, image: "movie3.png" },
  {
    title: "Fight Club",
    genre: "Drama",
    rating: 8.8,
    image: "Screenshot 2025-01-03 003614.png",
  },
  {
    title: "Forrest Gump",
    genre: "Drama",
    rating: 8.8,
    image: "Screenshot 2025-01-03 003634.png",
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 8.6,
    image: "Screenshot 2025-01-03 003653.png",
  },
  {
    title: "The Matrix",
    genre: "Sci-Fi",
    rating: 8.7,
    image: "Screenshot 2025-01-03 003715.png",
  },
  {
    title: "Gladiator",
    genre: "Action",
    rating: 8.5,
    image: "Screenshot 2025-01-03 003738.png",
  },
  {
    title: "The Godfather",
    genre: "Crime",
    rating: 9.2,
    image: "Screenshot 2025-01-03 003757.png",
  },
  {
    title: "Pulp Fiction",
    genre: "Crime",
    rating: 8.9,
    image: "Screenshot 2025-01-03 003828.png",
  },
];

//----------table code complete js --------------
// const table = document.querySelector("#moviebyjsfile");
// const genreFilter = document.querySelector("#genreFilter");
// const check = document.querySelector("#resetFilters");

// function renderTable(data) {
//   table.innerHTML = `
//     <tr>
//       <th>Title</th>
//       <th>Genre</th>
//       <th>Rating</th>
//     </tr>
//   `;
//   data.forEach((item) => {
//     let row = document.createElement("tr");

//     let tdtitle = document.createElement("td");
//     tdtitle.textContent = item.title;

//     let tdgenre = document.createElement("td");
//     tdgenre.textContent = item.genre;

//     let tdrating = document.createElement("td");
//     tdrating.textContent = item.rating;

//     row.appendChild(tdtitle);
//     row.appendChild(tdgenre);
//     row.appendChild(tdrating);
//     table.appendChild(row);
//   });
// }

// renderTable(movies);

// check.addEventListener("click", function () {
//   const selectedGenre = genreFilter.value;

//   let rating1=parseFloat(Number(document.querySelector('#rating').value));

//   if (selectedGenre === "all" ) {
//     const movieslist=movies.filter((item)=>item.rating>rating1);
//     renderTable(movieslist);
//   } else {
//     const filteredMovies = movies.filter((item) => item.genre === selectedGenre).filter((item)=>item.rating>rating1);
//     renderTable(filteredMovies);
//   }
// });
//---------------------------------------

const container = document.querySelector(".container");
const genreFilter = document.querySelector("#genreFilter");
const resetButton = document.querySelector("#resetFilters");
const ratingInput = document.querySelector("#rating");
function rendermovies(data) {
  container.innerHTML = "";
  data.forEach((movie) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
          <img src="${movie.image}" alt="${movie.title}">
          <p>${movie.title}</p>
          <p>${movie.genre}</p>
          <p>Rating: ${movie.rating}</p>
        `;
    container.appendChild(item);
  });
}
rendermovies(movies);

document.querySelector("#resetFilters").addEventListener("click", function () {
  const selectedgenre = genreFilter.value;
  let rate = parseFloat(Number(document.querySelector("#rating").value));
  let filteredmovies;
  if (selectedgenre == "all") {
    filteredmovies = movies.filter((item) => item.rating > rate);
    if(filteredmovies.length==0){
      alert("please try another filter");
      document.querySelector("#rating").value = null;
      return ;
    }
    rendermovies(filteredmovies);
  } else {
    filteredmovies = movies.filter(
      (item) => item.genre == selectedgenre && item.rating > rate
    );
    rendermovies(filteredmovies);
  }
});

document.querySelector('#reset').addEventListener('click',function(){
  rendermovies(movies);
  document.querySelector("#rating").value = null;
  genreFilter.value="all";
})

/* Example body / model:

{
“name”: “Strive School”,
“description”: “Horror movie about coding 10 hours per day”,
“category”: “horror”,
“imageUrl”: “https://bit.ly/3cMc2IH”
}


headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzA5OWU3MzczODAwMTUzNzQzNzIiLCJpYXQiOjE2NzQ0MTU4MjksImV4cCI6MTY3NTYyNTQyOX0.13kwGYawX6UMCIWdGW6s5yIZNWGHj6esfxBZPgCyGFQ"
  } 



*/
// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2Y0OGU3MzczODAwMTUzNzQzOWQiLCJpYXQiOjE2NzQyMDg3OTUsImV4cCI6MTY3NTQxODM5NX0.ztuggPMbDjIkPpQXr_BbaGYASuaXYR8TS8ORHPBaL4k"
// }
// })




const url = "https://striveschool-api.herokuapp.com/api/movies";

const options = {                
    headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzA5OWU3MzczODAwMTUzNzQzNzIiLCJpYXQiOjE2NzQ0MTU4MjksImV4cCI6MTY3NTYyNTQyOX0.13kwGYawX6UMCIWdGW6s5yIZNWGHj6esfxBZPgCyGFQ"
    }),
};

window.onload = () => {
    getGenres();
};

const allGenres = [];
const getGenres = async () => {
    // GET Method
    try {
        const response = await fetch(url, options);
        const genres = await response.json();
        genres.forEach((genre) => {
            allGenres.push(genre);
            getMovies(genre);
        });
    } catch (error) {
        console.log(error);
    }
};

const getMovies = async (genre) => {
    try {
        const response = await fetch(url + "/" + genre, options);
        const movieNode = await response.json();
        renderMovies(movieNode, genre);
    } catch (error) {
        console.log(error);
    }
};

const urlParams = new URLSearchParams(location.search);
const ID = urlParams.get("id");
console.log(ID);

const comedyContainer = document.querySelector("#comedyContainer")

const actionContainer = document.querySelector("#actionContainer")

const horrorMoviesContainer = document.querySelector("#horrorMoviesContainer")

const defaultMoviesContainer = document.querySelector("#defaultMoviesContainer")


const allMovies = []
const renderMovies = (allMovies, genre) => {
    let moviesContainer = null;
    switch (genre) {
        case "comedy":
            moviesContainer = comedyContainer;
            break;
        case "action":
            moviesContainer = actionContainer;
            break;
        case "horror":
            moviesContainer = horrorMoviesContainer;
            break;
        default:
            moviesContainer = defaultMoviesContainer;
        }
        if (moviesContainer !== null) {
            moviesInside = allMovies
            .map(({ name, description, imageUrl }) => {
                return `<div class="movie-card card" style="width: 10rem;">
                <img src="${imageUrl}" class="card-img-top">
                <div class="card-body">
                  <p class="card-title text-secondary">${name}</p>
                  <div class="dropdown-divider"></div>
                  <p class="card-text text-secondary">${description}</p>
                </div>
              </div>`;
            })
            .join("");
            moviesContainer.innerHTML = moviesInside;
        }
};



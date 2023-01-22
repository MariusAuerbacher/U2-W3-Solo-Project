// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {

// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2Y0OGU3MzczODAwMTUzNzQzOWQiLCJpYXQiOjE2NzQyMDg3OTUsImV4cCI6MTY3NTQxODM5NX0.ztuggPMbDjIkPpQXr_BbaGYASuaXYR8TS8ORHPBaL4k"
// }
// })

const url = "https://striveschool-api.herokuapp.com/api/movies"

window.onload = () => {
    getCategories();
};

const options = {                
    headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzA5OWU3MzczODAwMTUzNzQzNzIiLCJpYXQiOjE2NzQ0MTU4MjksImV4cCI6MTY3NTYyNTQyOX0.13kwGYawX6UMCIWdGW6s5yIZNWGHj6esfxBZPgCyGFQ"
    }),
};

const postData = async(movie) => {
    try {
        let res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(movie),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzA5OWU3MzczODAwMTUzNzQzNzIiLCJpYXQiOjE2NzQ0MTU4MjksImV4cCI6MTY3NTYyNTQyOX0.13kwGYawX6UMCIWdGW6s5yIZNWGHj6esfxBZPgCyGFQ"
            },
        });
    } catch(error) {
        console.log(error)
    }
}

const submitMovie = () => {
    let movie = {
        name: document.querySelector("#nameId").value,
        description: document.querySelector("#descriptionId").value,
        category: document.querySelector("#categoryId").value,
        imageUrl: document.querySelector("#imageUrlId").value,
    };
    postData(movie);
};

const params = new URLSearchParams(location.search)
const ID = params.get("id");
const editContainer = document.querySelector("#editContainer");

const allCategories = [];
const getCategories = async () => {
    try {
        const res = await fetch(url, options);
        const categories = await res.json();
        categories.forEach((category) => {
            allCategories.push(category);
            getMovies(category);
        });
    } catch (error) {
        console.log(error);
    }
};

const allMovies = [];
const getMovies = async (category) => {
    try {
        const res = await fetch(url + "/" + category, options);
        const movieData = await res.json();
        movieData.forEach((movie) => {
            allMovies.push(movie);
        });
        moviesBackOffice(movieData, category);
    } catch (error) {
        console.log(error);
    }
}




const moviesBackOffice = (allMovies, category) => {
    const check = document.querySelector(`#${category}Container`);
    if (check === null) {
        const tableContainer = document.createElement("div");
        tableContainer.className = "container";
        tableContainer.id = `${category}Container`;
        tableContainer.innerHTML = "";
        tableContainer.innerHTML = `
        <div class="row">
        <div class="col">
        <table class="table table-info table-borderless text-align">
            <thead class="thead-dark text-align">
                <tr class="text-align">
                <th scope="Image">Images</th>
                <th scope="col">Name</th>
                <th scope="col">Genre</th>
                <th scope="col">ID</th>
                <th scope="row">Edit/Delete</th>
                </tr>
            </thead>
            <tbody ></tbody>
                </table>
        </div>
      </div>`;
        editContainer.appendChild(tableContainer)

        const tableBody = document.querySelector(`#${category}Container tbody`);

        const moviesInside = allMovies.map(({ name, imageUrl, _id}) => {
            return `<tr>
            <td><img src="${imageUrl}" style="object-fit:cover; width:60px; height: 60px"></td>
            <td>${name}</td>
            <td>${category}</td>
            <td>${_id}</td>
            
            <td>
            
            
            <div>
                <button type="button" class="btn btn-info" onclick="editMovie()">EDIT</button>
                <button type="button" class="btn btn-danger" onclick="deleteMovie('${_id}')">DELETE</button>         
            </div>
            </td>
        </tr>`;

        })
        .join("");
        tableBody.innerHTML = moviesInside;
    }
}


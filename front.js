/* Example body / model:

{
“name”: “Strive School”,
“description”: “Horror movie about coding 10 hours per day”,
“category”: “horror”,
“imageUrl”: “https://bit.ly/3cMc2IH”
}


headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzA5OWU3MzczODAwMTUzNzQzNzIiLCJpYXQiOjE2NzQyMDQzNTYsImV4cCI6MTY3NTQxMzk1Nn0.NkRa_FzwAWGfZF-jAqJaTZnqgFul4EWN_3k7fiDHSB0"
  } 



*/
// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2Y0OGU3MzczODAwMTUzNzQzOWQiLCJpYXQiOjE2NzQyMDg3OTUsImV4cCI6MTY3NTQxODM5NX0.ztuggPMbDjIkPpQXr_BbaGYASuaXYR8TS8ORHPBaL4k"
// }
// })


const url = "https://striveschool-api.herokuapp.com/api/movies"

const getData = async () => {
    try {
        let res = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzA5OWU3MzczODAwMTUzNzQzNzIiLCJpYXQiOjE2NzQyMDQzNTYsImV4cCI6MTY3NTQxMzk1Nn0.NkRa_FzwAWGfZF-jAqJaTZnqgFul4EWN_3k7fiDHSB0"
                },
        });
        if (res.ok) {
        let data = res.json()
        console.log(data);
        displayMovies(data)
    }
} catch (error) {
    console.log(error);
}
}

getData()

const displayMovies = (data) => {
  let movieRowNode = document.getElementById('row');
  console.log(movieRowNode)
  data.forEach((singleMovie) => {
      singleMovie.innerHTML += `
      <div class="col-md-2">
      <h2> ${singleMovie.category} </h2>
      </div>
      `
  })
}


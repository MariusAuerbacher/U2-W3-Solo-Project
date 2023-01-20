// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {

// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2Y0OGU3MzczODAwMTUzNzQzOWQiLCJpYXQiOjE2NzQyMDg3OTUsImV4cCI6MTY3NTQxODM5NX0.ztuggPMbDjIkPpQXr_BbaGYASuaXYR8TS8ORHPBaL4k"
// }
// })


const url = "https://striveschool-api.herokuapp.com/api/movies"

const postData = async(movie) => {
    try {
        let res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(movie),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzA5OWU3MzczODAwMTUzNzQzNzIiLCJpYXQiOjE2NzQyMDQzNTYsImV4cCI6MTY3NTQxMzk1Nn0.NkRa_FzwAWGfZF-jAqJaTZnqgFul4EWN_3k7fiDHSB0"
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
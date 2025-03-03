//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPhoto)

function getPhoto(){
    let date = document.querySelector('input').value

    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=aSgKXmNdygxN2tCHjeXDDQMhS4xqIS6hfcZNKvWL`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            date = document.querySelector('input').value
            document.querySelector('img').src = data.url
            document.getElementById('title').innerText = data.title
            document.getElementById('desc').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });



}

// https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY


//read eloquent javascript to train your fucking brain/mind`
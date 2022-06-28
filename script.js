const searchBtn = document.querySelector('button');
const searchChar = document.querySelector('#usr');
const showResult = document.querySelector('textarea');

searchBtn.onclick = getFullUri;

function getFullUri(){
    getApi("https://www.swapi.tech/api/people/?name=" + searchChar.value);
}

function getApi(fullUri){

    //kod här


    fetch(fullUri)
    .then(res=>res.json())
    .then(data=>
    {
        //kod här
        console.log(data.result[0].properties)
        showResult.value = showResult.value + "Height: " + data.result[0].properties.height + "\n";
        showResult.value = showResult.value + "Mass: " + data.result[0].properties.mass + "\n";
        showResult.value = showResult.value + "Gender: " + data.result[0].properties.gender + "\n";
        showResult.value = showResult.value + "Hair color: " + data.result[0].properties.hair_color + "\n";
        showResult.value = showResult.value + "Skin color: " + data.result[0].properties.skin_color;
    })
    .catch(err=>console.log(err))
}
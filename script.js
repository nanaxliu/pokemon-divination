const apiUrlBase = "https://pokeapi.co/api/v2/pokemon/"

let year;
let month;
let day;

let birthday;
let birthdayConverted;

let btn = document.querySelector("button")

btn.addEventListener('click', () => {
    let year = document.getElementById("year");
    year = form.elements[0].value;
    let month = document.getElementById("month");
    month = form.elements[1].value;
    let day = document.getElementById("day");
    day = form.elements[2].value;

    let birthday = Number(Math.round(year/month)) + Number(day);
    birthdayConverted = birthday.toString()
    fetchPokemon()
})


async function fetchPokemon(){


    let apiUrl = `${apiUrlBase}${birthdayConverted}/`
    console.log(apiUrl)
    
    try{
        const response = await fetch(apiUrl)

        if(!response.ok){
            throw new Error(`HTTP error. Statues:${response.status}`);
        }

    const data = await response.json();
    console.log(data)
    }
    
    catch (error){
        console.error("There has been an error with fetch", error)
    }
    
  }
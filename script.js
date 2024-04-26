const apiUrlBase = "https://pokeapi.co/api/v2/pokemon/"

let birthday;
let birthdaySoup;
let birthdayConverted;

let pokeID;
let pokeIDConverted;

let btn = document.querySelector("button")

btn.addEventListener('click', () => {
    let birthday = document.getElementById("birthday");
    birthday = form.elements[0].value;
    let textbday = birthday.toString();
    
	const year = textbday.slice(0, 4);
    const month = textbday.slice(5, 7);
    const day = textbday.slice(8, 10);
    
	birthdaySoup = Number(Math.round(year/month)) + Number(day);

    if (birthdaySoup > 1302){
        birthdaySoup = Math.round(birthdaySoup/2)
    }

    pokeID = birthdaySoup
    if (pokeID > 630){
        pokeID = pokeID + 1
    }

    birthdayConverted = birthdaySoup.toString()
    pokeIDConverted = pokeID.toString()
    fetchPokemon()

    var image = document.getElementById('sprite');
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeIDConverted}.png`
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



  
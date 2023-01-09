const TOKEN = 1240373246812394

// fetch('https://superheroapi.com/api/1240373246812394/2')
// .then(Response => Response.json())
// .then(json => console.log(json))
const main = document.getElementsByClassName("main")
const check = setInterval(() => {
    console.log(document.readyState);
    if (document.readyState === "complete") {
        main[0].classList.remove("hidden")
        clearInterval(check)
        let getNew = document.getElementById("get-new")
        console.log(getNew);
        getNew.addEventListener("click", getHero)
    }


}, 500);






const getHero = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b4f68bc2c2mshe608a930ef4fc28p185c1djsn645ce3f43579',
            'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
        }
    }

    const response = await fetch('https://superhero-search.p.rapidapi.com/api/heroes/', options)

    const data = await response.json()


    let imgTag = document.getElementById("img")
    let nameHero = document.getElementById("name")
    // let genderHero = document.getElementById("genderHero")
    let placeOfBirth = document.getElementById("placeOfBirth")
    let firstAppearance = document.getElementById("firstAppearance")
    let gender = document.getElementById("gender")



    gender.innerText = data[0].appearance.gender
    imgTag.src = data[0].images.sm
    nameHero.innerText = data[0].name
    placeOfBirth.innerText = data[0].biography.placeOfBirth
    firstAppearance.innerText = data[0].biography.firstAppearance

    powerstats = document.getElementById("powerstats")
    powerstatsValues = document.getElementById("powerstats-values")
    powerstats.innerHTML = ""
    powerstatsValues.innerHTML = ""
    for (const key in data[0].powerstats) {

        powerstats.innerHTML += `
            <div class="text-base text-gray-400 font-semibold">
                <p>${key}</p>
            </div>
            `

        powerstatsValues.innerHTML += `
        <div class="text-base text-gray-400 font-semibold">
                <p>${data[0].powerstats[key]}</p>
        </div>
        `

    }












};

getHero()


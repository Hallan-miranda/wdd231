const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const figcaption = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75057516103634&lon=6.634694626115908&appid=15f120b599bb3dce1483e124f2133b4b&lang=pt&units=metric";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data); 
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    currentTemp.innerHTML = `${temp}&deg;C`; 
    const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather icon');
    figcaption.textContent = `${description}`; 
}

apiFetch();

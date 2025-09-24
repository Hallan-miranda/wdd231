const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');
const highLow = document.querySelector('#high-low');
const humidity = document.querySelector('#humidity');
const sunriseSunset = document.querySelector('#sunrise-sunset');
const forecastDays = document.querySelector('#forecast-days');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&appid=15f120b599bb3dce1483e124f2133b4b&lang=pt&units=metric";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayCurrentWeather(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

function displayCurrentWeather(data) {
  const temp = data.main.temp;
  const description = data.weather[0].description;
  const iconCode = data.weather[0].icon;
  const tempMax = data.main.temp_max;
  const tempMin = data.main.temp_min;
  const hum = data.main.humidity;
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString('pt-BR');
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString('pt-BR');

  currentTemp.innerHTML = `${temp.toFixed(1)}°C`;
  weatherDesc.textContent = description;
  highLow.textContent = `Máx: ${tempMax}°C / Mín: ${tempMin}°C`;
  humidity.textContent = `Humidity: ${hum}%`;
  sunriseSunset.textContent = `Sunrise: ${sunrise} / Sunset: ${sunset}`;
  weatherIcon.src = `https://openweathermap.org/img/w/${iconCode}.png`;
  weatherIcon.alt = description;
}

const forecast = [
  { day: "Today", temp: 90 },
  { day: "Wednesday", temp: 89 },
  { day: "Thursday", temp: 68 }
];

forecast.forEach(item => {
  const div = document.createElement('div');
  div.textContent = `${item.day}: ${item.temp}°F`;
  forecastDays.appendChild(div);
});

apiFetch();

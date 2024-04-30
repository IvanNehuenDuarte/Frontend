// DOM
const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

// Escuchamos btn de busqueda
search.addEventListener("click", () => {

    // Clave API. Obtenemos la ciudad escrita por el usuario.
  const APIKey = '8bfca1d8ff4bdf44278d523f1344745a';
  const city = document.querySelector(".search-box input").value;
    // Si es vacío retornamos
  if (city === "") return;
    // Llamamos la API para obtener datos de clima y lo convertimos en JSON
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then((response) => response.json())
    .then((json) => {
        // Verificamos error, ajustamos el estilo del contenedor, ocultamos la info y mostramos error 404 con un efecto de entrada con el 'fadeIn'
      if (json.cod === "404") {
        container.style.height = "404";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
        return;
      }
      // Si no hay error ocultamos el error y eliminamos la clase fadeIn
      error404.style.display = "none";
      error404.classList.remove("fadeIn");
      //Definimos referencias a elementos para actualizar la información del clima
      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(".weather-details .humidity span");
      const wind = document.querySelector(".weather-details .wind span");
      // Actualizamos la imagen del clima según el tipo de clima obtenido del JSON
      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/clear.png";
          break;
        case "Rain":
          image.src = "images/rain.png";
          break;

        case "Snow":
          image.src = "images/snow.png";
          break;

        case "Clouds":
          image.src = "images/cloud.png";
          break;

        case "Haze":
          image.src = "images/haze.png";
          break;

          default:
            image.src = '';
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
      // Dejamos los estilos para box y details por defecto como estén en el css con (display = '')y agregamos la clase fadeIn para agregarle efecto a la box y details.
      weatherBox.style.display = '';
      weatherDetails.style.display = '';
      weatherBox.classList.add('fadeIn');
      weatherDetails.classList.add('fadeIn');
      container.style.height = '590px';

    });
});

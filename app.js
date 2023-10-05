const cityForm = document.querySelector("form");

const card = document.querySelector(".card");
const details = document.querySelector(".details");

const updateCity = async (city) => {
  const cityInfo = await getCity(city);
  const weather = await getWeather(cityInfo.Key);

  return {
    cityInfo: cityInfo,
    weather: weather,
  };
};

const updateUI = (data) => {
  const cityInfo = data.cityInfo;
  const weather = data.weather;

  // dat & night
  if (weather.IsDayTime) {
    details.innerHTML = `
    <img class="card-img-top" src="dayimage.png">
    <h5 class="my-3">${cityInfo.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>`;
  } else {
    details.innerHTML = `
    <img class="card-img-top" src="nightimage.png">
    <h5 class="my-3">${cityInfo.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>`;
  }

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // 가운데 city는 <input type="text" name="city" /> 의 name 이름
  const city = cityForm.city.value;

  updateCity(city).then((data) => {
    // console.log(data);
    updateUI(data);
  });
});

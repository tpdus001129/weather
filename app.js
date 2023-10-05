const cityForm = document.querySelector("form");

const updateCity = async (city) => {
  const cityInfo = await getCity(city);
  const weather = await getWeather(cityInfo.Key);

  return {
    cityInfo: cityInfo,
    weather: weather,
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // 가운데 city는 <input type="text" name="city" /> 의 name 이름
  const city = cityForm.city.value;

  updateCity(city).then((data) => {
    console.log(data);
  });
});

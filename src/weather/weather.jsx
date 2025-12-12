import  { useState } from "react";
import Header from "./Header.jsx";
import Search from "../search/Search.jsx";
import InfoBox from "../WeatherInfo/InfoBox.jsx";
import "./weather.css";  

const DEFAULT_WEATHER = {
  city: "Delhi",
  country: "IN",
  temp: 25.5,
  tempMin: 25.5,
  tempMax: 25.5,
  feels: 24.8,
  weather: "haze",
  main: "Haze",
  id: null,
  icon: null,
  humidity: 47,
};

export default function Weather() {
  const [weatherInfo, setWeatherInfo] = useState(DEFAULT_WEATHER);

  return (
    <div className="main">
      <Header />
      <Search updateWeather={setWeatherInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
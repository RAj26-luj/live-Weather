import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar.jsx";
import RecentPanel from "./RecentPanel.jsx";
import ErrorSnackbar from "./ErrorSnackbar.jsx";
import "./search.css";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const RECENT_KEY = "weather_recent_searches_v1";

export default function Search({ updateWeather }) {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(RECENT_KEY);
      if (raw) setRecent(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to load recent searches", e);
    }
  }, []);

  const saveRecent = (name) => {
    try {
      const list = [name, ...(recent.filter((r) => r.toLowerCase() !== name.toLowerCase()))].slice(0, 5);
      localStorage.setItem(RECENT_KEY, JSON.stringify(list));
      setRecent(list);
    } catch (e) {
      console.error("Failed to save recent search", e);
    }
  };

  async function fetchWeather(name) {
    if (!API_KEY) throw new Error("Missing API key. Add VITE_WEATHER_API_KEY to your .env");

    const res = await fetch(`${API_URL}?q=${encodeURIComponent(name)}&appid=${API_KEY}&units=metric`);
    const obj = await res.json().catch(() => null);

    if (!res.ok) {
      const msg = obj?.message ? obj.message.charAt(0).toUpperCase() + obj.message.slice(1) : `Request failed (${res?.status})`;
      throw new Error(msg);
    }

    if (!obj?.main || !Array.isArray(obj?.weather) || !obj.weather[0]) {
      throw new Error("Invalid weather data received");
    }

    return {
      city: obj.name,
      country: obj.sys?.country,
      temp: obj.main.temp,
      tempMin: obj.main.temp_min,
      tempMax: obj.main.temp_max,
      feels: obj.main.feels_like,
      weather: obj.weather[0].description,
      main: obj.weather[0].main,
      id: obj.weather[0].id,
      icon: obj.weather[0].icon,
      humidity: obj.main.humidity,
      raw: obj,
    };
  }

  const submitCity = async (value) => {
    const q = (value ?? city).trim();
    if (!q) return;

    setLoading(true);
    setErr("");

    try {
      const data = await fetchWeather(q);
      updateWeather && updateWeather(data);
      saveRecent(q);
      setCity("");
    } catch (e) {
      setErr(e.message || "Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    e?.preventDefault();
    submitCity();
  };

  const onSelectRecent = (name) => {
    setCity(name);
    submitCity(name);
  };

  const clearAllRecent = () => {
    localStorage.removeItem(RECENT_KEY);
    setRecent([]);
  };

  return (
    <Box className="search-wrapper">
      <SearchBar
        city={city}
        setCity={setCity}
        onSubmit={onSubmit}
        loading={loading}
        clearCity={() => setCity("")}
      />

      <RecentPanel recent={recent} onSelectRecent={onSelectRecent} clearAllRecent={clearAllRecent} />

      <ErrorSnackbar error={err} onClose={() => setErr("")} />
    </Box>
  );
}
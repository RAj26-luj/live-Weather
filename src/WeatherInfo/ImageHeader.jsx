import Box from "@mui/material/Box";
import WeatherIcon from "./WeatherIcon.jsx";

const IMAGES_DARK = {
  hot: "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=1600&q=80&auto=format&fit=crop",
  cold: "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1600&q=80&auto=format&fit=crop",
  rain: "https://images.unsplash.com/photo-1603262439120-3e17d13bab3f?w=1600&q=80&auto=format&fit=crop",
  snow: "https://images.unsplash.com/photo-1477601372917-8a06f4e2b310?w=1600&q=80&auto=format&fit=crop",
  cloudy: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1600&q=80&auto=format&fit=crop",
  default: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1600&q=80&auto=format&fit=crop",
};

function chooseImage({ id, main, temp, humidity }) {
  if (id >= 200 && id < 300) return IMAGES_DARK.rain;
  if (id >= 500 && id < 600) return IMAGES_DARK.rain;
  if (id >= 600 && id < 700) return IMAGES_DARK.snow;
  if (/snow/i.test(main)) return IMAGES_DARK.snow;
  if (/rain|drizzle|thunder/i.test(main) || (humidity ?? 0) >= 75) return IMAGES_DARK.rain;
  if ((temp ?? 0) >= 28) return IMAGES_DARK.hot;
  if ((temp ?? 0) <= 10) return IMAGES_DARK.cold;
  if (/cloud/i.test(main)) return IMAGES_DARK.cloudy;
  return IMAGES_DARK.default;
}

export default function ImageHeader({ info }) {
  const mainText = (info.main || info.weather || "").toString();
  const image = chooseImage({ id: info.id, main: mainText, temp: info.temp, humidity: info.humidity });

  return (
    <Box
      className="infobox-dark-media"
      role="img"
      aria-label={`${mainText} background`}
      sx={{
        backgroundImage: `linear-gradient(180deg, rgba(3,7,18,0.08), rgba(3,7,18,0.46)), url(${image})`,
      }}
    >
      <div className="infobox-dark-gradient" />
      <div className="infobox-icon-bubble" title={mainText}>
        <WeatherIcon mainText={mainText} />
      </div>
    </Box>
  );
}
import OpacityIcon from "@mui/icons-material/Opacity";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import ThermostatIcon from "@mui/icons-material/Thermostat";

export default function WeatherIcon({ mainText }) {
  if (/(rain|drizzle|thunder)/i.test(mainText)) {
    return <OpacityIcon className="infobox-icon" />;
  }
  if (/snow/i.test(mainText)) {
    return <CloudQueueIcon className="infobox-icon" />;
  }
  if (/cloud/i.test(mainText)) {
    return <CloudQueueIcon className="infobox-icon" />;
  }
  return <ThermostatIcon className="infobox-icon" />;
}
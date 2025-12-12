import ThermostatIcon from "@mui/icons-material/Thermostat";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";


export default function TempBlock({ temp, min, max, feels }) {
  const t = temp ?? "—";
  const mn = min ?? "—";
  const mx = max ?? "—";
  const fl = feels ?? "—";

  return (
    <div className="infobox-stat big" aria-label="temperature">
      <div className="infobox-stat-label">
        <ThermostatIcon sx={{ fontSize: 20 }} className="accent-icon" /> <span>Temperature</span>
      </div>

      <div className="infobox-stat-value temp-anim">{t}°C</div>

      <div className="infobox-temp-range" aria-hidden={false}>
        <span className="temp-range-item">
          <ArrowDownwardIcon sx={{ fontSize: 16 }} className="min-arrow" />
          <span className="temp-range-text">{mn}°</span>
        </span>
        <span className="temp-range-item">
          <ArrowUpwardIcon sx={{ fontSize: 16 }} className="max-arrow" />
          <span className="temp-range-text">{mx}°</span>
        </span>
      </div>

      <div className="infobox-stat-sub">Feels like {fl}°C</div>
    </div>
  );
}
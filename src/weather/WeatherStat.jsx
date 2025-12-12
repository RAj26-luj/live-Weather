import { Paper, Typography } from "@mui/material";
import "./WeatherStat.css";

export default function WeatherStat({ label, value }) {
  return (
    <Paper className="weatherstat-dark" elevation={0}>
      <Typography className="weatherstat-label">{label}</Typography>
      <Typography className="weatherstat-value">{value}</Typography>
    </Paper>
  );
}
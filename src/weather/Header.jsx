import { Typography } from "@mui/material";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-dark">
      <Typography variant="h4" className="header-title">
        Quick Weather
      </Typography>
      <Typography variant="body2" className="header-sub">
        Real-time forecast 
      </Typography>
    </div>
  );
}
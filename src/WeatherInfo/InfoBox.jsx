// InfoBox.jsx

import { Card, CardContent, Box } from "@mui/material";
import "./InfoBox.css";

// InfoBox.jsx (top)
import ImageHeader from "./ImageHeader.jsx";
import HeaderInfo from "./HeaderInfo.jsx";
import TempBlock from "./TempBlock.jsx";
import Stat from "./Stat.jsx";
export default function InfoBox({ info }) {
  const safe = info ?? {};

  if (!safe || !safe.city) {
    return (
      <div className="infobox-dark-placeholder">
        <div style={{ padding: 16, color: "var(--text, #eaf3ff)" }}>No weather data</div>
      </div>
    );
  }

  return (
    <Card className="infobox-dark-card" elevation={8} sx={{ background: "transparent" }}>
      <ImageHeader info={safe} />

      <CardContent className="infobox-dark-content">
        <HeaderInfo info={safe} />

        <Box className="infobox-dark-stats">
          <TempBlock
            temp={safe.temp}
            min={safe.tempMin}
            max={safe.tempMax}
            feels={safe.feels}
            main={safe.main || safe.weather}
          />

          <Stat
            title="Humidity"
            value={safe.humidity != null ? `${safe.humidity}%` : "—"}
            iconKey="humidity"
          />

          <Stat
            title="Condition"
            value={safe.weather ?? safe.main ?? "—"}
            iconKey="condition"
            sub="Updated just now"
          />
        </Box>
      </CardContent>
    </Card>
  );
}
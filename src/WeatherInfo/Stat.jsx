// Stat.jsx
import React from "react";
import { Typography } from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

/**
 * Stat - small reusable stat block
 * props:
 *  - title: string
 *  - value: string
 *  - iconKey: "humidity" | "condition"
 *  - sub: optional string
 */
export default function Stat({ title, value, iconKey, sub }) {
  const Icon = iconKey === "humidity" ? WaterDropIcon : CloudQueueIcon;

  return (
    <div className="infobox-stat" role="group" aria-label={title}>
      <div className="infobox-stat-label">
        <Icon sx={{ fontSize: 18 }} className="accent-icon" /> <span>{title}</span>
      </div>

      <div className="infobox-stat-value">{value}</div>

      {sub ? (
        <div className="infobox-stat-sub">
          <Typography variant="caption">{sub}</Typography>
        </div>
      ) : null}
    </div>
  );
}
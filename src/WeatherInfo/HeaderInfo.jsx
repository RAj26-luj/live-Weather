import { Box, Typography, Chip } from "@mui/material";

export default function HeaderInfo({ info }) {
  const label = (info.weather || info.main || "—").toString();
  return (
    <Box className="infobox-dark-header">
      <div>
        <Typography variant="h5" className="infobox-dark-city">
          {info.city}
          {info.country ? `, ${info.country}` : ""}
        </Typography>
        <Typography variant="body2" className="infobox-dark-sub">
          {label}
        </Typography>
      </div>

      <Chip label={label} variant="filled" className="infobox-dark-chip" />
    </Box>
  );
}
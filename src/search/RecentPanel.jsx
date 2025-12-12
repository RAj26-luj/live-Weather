import { Box, Chip, Fade } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";

export default function RecentPanel({ recent = [], onSelectRecent, clearAllRecent }) {
  if (!recent || recent.length === 0) return null;

  return (
    <Fade in={true}>
      <Box className="recent-panel">
        <div className="recent-header">
          <div className="recent-title">
            <HistoryIcon fontSize="inherit" />
            <span>Recent</span>
          </div>
          <button type="button" onClick={clearAllRecent} className="clear-recent-link">
            Clear all
          </button>
        </div>

        <div className="recent-chips">
          {recent.map((r) => (
            <Chip
              key={r}
              label={r}
              onClick={() => onSelectRecent(r)}
              className="recent-chip"
              clickable
            />
          ))}
        </div>
      </Box>
    </Fade>
  );
}
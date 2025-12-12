import {
  Paper,
  InputBase,
  IconButton,
  Button,
  CircularProgress,
  Fade
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

export default function SearchBar({ city, setCity, onSubmit, loading, clearCity }) {
  return (
    <Paper component="form" onSubmit={onSubmit} className="search-bar" elevation={0}>
      <div className="search-icon-wrapper" aria-hidden>
        <SearchIcon />
      </div>

      <InputBase
        className="search-input"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        inputProps={{ "aria-label": "search city" }}
        fullWidth
      />

      <div className="search-actions">
        <Fade in={!!city}>
          <IconButton
            size="small"
            className="clear-btn"
            onClick={() => clearCity()}
            aria-label="clear"
          >
            <ClearIcon fontSize="small" />
          </IconButton>
        </Fade>

        <Button
          type="submit"
          variant="contained"
          disableElevation
          className="search-submit-btn"
          disabled={loading}
        >
          {loading ? <CircularProgress size={20} color="inherit" /> : "Search"}
        </Button>
      </div>
    </Paper>
  );
}
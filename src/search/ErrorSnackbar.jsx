import { Snackbar, Alert } from "@mui/material";

export default function ErrorSnackbar({ error, onClose }) {
  return (
    <Snackbar
      open={!!error}
      autoHideDuration={4000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert 
        onClose={onClose} 
        severity="error" 
        variant="filled"
        sx={{ width: "100%", boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
      >
        {error}
      </Alert>
    </Snackbar>
  );
}
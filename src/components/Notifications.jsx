// src/components/Notifications.jsx
import { useState } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';

const Notifications = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>Show Notification</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning">
          This is a threat notification!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Notifications;

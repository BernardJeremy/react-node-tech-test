import React from "react";
import { Snackbar, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export default function Customlert({
  message,
  action,
  ButtonProps,
  SnackbarProps,
  customParameters
}) {
  return (
    <Snackbar autoHideDuration={6000} {...SnackbarProps}>
      <Alert
        severity={customParameters?.type}
        action={
          action != null && (
            <Button color="inherit" size="small" {...ButtonProps}>
              {action}
            </Button>
          )
        }
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

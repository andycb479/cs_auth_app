import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Button, Container, Typography } from "@mui/material";

export interface IAuthProps {}

export default function Auth() {
  const { isAuthenticated, loginWithPopup, logout, user } = useAuth0();
  const [modified, setModified] = React.useState(0);
  const handleLogIn = () => {
    loginWithPopup({ prompt: "login" });
  };

  const handleSignIn = () => {
    loginWithPopup();
  };

  const handleLogOut = () => {
    logout();
  };

  React.useEffect(() => {
    setModified((prev) => prev + 1);
  }, [user]);

  if (isAuthenticated && !user?.email_verified) {
    return (
      <Typography variant="h6" fontWeight={300}>
        Please confirm your email. The confirmation was send to the "
        {user?.email}" email address.
      </Typography>
    );
  }

  if (isAuthenticated && user?.email_verified) {
    return (
      <>
        <Typography variant="h6" fontWeight={300}>
          You are signed in as {user.email}
        </Typography>
        <Typography
          variant="h6"
          fontWeight={300}
          sx={{ display: "flex", alignItems: "center" }}
        >
          Email confirmed:
          {user.email_verified ? (
            <CheckCircleOutlineIcon color="success" />
          ) : (
            <CheckCircleOutlineIcon color="error" />
          )}
        </Typography>
        <Button variant="contained" onClick={handleLogOut} sx={{ mt: 2 }}>
          LogOut
        </Button>
      </>
    );
  }

  return (
    <>
      <Typography variant="h4">Email Confirmation App</Typography>
      <Button
        sx={{ mt: 2, width: 160 }}
        variant="contained"
        onClick={handleLogIn}
      >
        Log In / Sign Up
      </Button>
    </>
  );
}

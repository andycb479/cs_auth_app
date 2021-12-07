import { Container } from "@mui/material";
import React from "react";
import "./App.css";
import Auth from "./Auth";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        mt: 10,
        alignItems: "center",
      }}
    >
      <Auth />
    </Container>
  );
}

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, Container } from "@mui/material";

export function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="static">
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>Weatherman</div>
          <div>
            <Button
              variant="text"
              color="secondary"
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            <Button
              variant="text"
              color="secondary"
              onClick={() => navigate("/favorites")}
            >
              Favorites
            </Button>
          </div>
        </Container>
      </AppBar>
      <Container>{children}</Container>
    </div>
  );
}

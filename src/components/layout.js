import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, Container } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";

export function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="static">
        <Container
          style={{
            height: 60,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>{<CloudIcon />} Weatherman</div>
          <div>
            <Button
              sx={{ textTransform: "none", color: "#fff" }}
              variant="text"
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            <Button
              sx={{ textTransform: "none", color: "#fff" }}
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

import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, Container } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import { Box } from "@mui/system";

export function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar position="static">
        <Container
          style={{
            height: 56,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CloudIcon />
            <Box sx={{ ml: 1 }}>Weatherman</Box>
          </Box>
          <Box>
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
              onClick={() => navigate("/favorites")}
            >
              Favorites
            </Button>
          </Box>
        </Container>
      </AppBar>
      <Container>{children}</Container>
    </Box>
  );
}

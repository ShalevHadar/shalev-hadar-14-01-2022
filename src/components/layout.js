import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, Container } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import { Box, useTheme } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../theme/theme-slice";

export function Layout({ children }) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const toggleMode = () => {
    dispatch(toggleDarkMode());
  };

  console.log(theme);

  return (
    <Box
      sx={{ backgroundColor: theme.palette.background.default, height: "100%" }}
    >
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
              sx={{ textTransform: "none" }}
              variant="text"
              onClick={() => navigate("/")}
              color="inherit"
            >
              Home
            </Button>
            <Button
              sx={{ textTransform: "none" }}
              variant="text"
              onClick={() => navigate("/favorites")}
              color="inherit"
            >
              Favorites
            </Button>
            <IconButton
              sx={{ textTransform: "none" }}
              variant="text"
              onClick={toggleMode}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Container>
      </AppBar>
      <Container>{children}</Container>
    </Box>
  );
}

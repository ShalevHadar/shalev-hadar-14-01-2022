import { Container } from "@mui/material";
import React from "react";

export function Layout({ children }) {
  return (
    <div>
      <Container>
        <header>Navbar will be here</header>
      </Container>
      <Container>{children}</Container>
    </div>
  );
}

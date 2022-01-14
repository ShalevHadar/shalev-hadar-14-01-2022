import React from "react";

export function Layout({ children }) {
  return (
    <div>
      <header>Navbar will be here</header>
      <div>{children}</div>
    </div>
  );
}

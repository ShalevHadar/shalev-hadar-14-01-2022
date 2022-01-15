import React from "react";
import { Layout } from "../components/layout";
import { FavoriteCards } from "../components/favorites";
import { Box } from "@mui/system";

export function Favorites() {
  return (
    <Layout>
      <Box sx={{ mt: 5 }}>
        <FavoriteCards />
      </Box>
    </Layout>
  );
}

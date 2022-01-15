import React from "react";
import { Layout } from "../components/layout";
import { Search } from "../search/search";
import { City } from "../city/city";
import { Box } from "@mui/system";

export function Homepage() {
  return (
    <Layout>
      <Box sx={{ mt: 5 }}>
        <Search />
      </Box>
      <Box sx={{ mt: 3 }}>
        <City />
      </Box>
    </Layout>
  );
}

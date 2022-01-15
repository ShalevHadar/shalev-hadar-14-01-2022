import React, { useEffect } from "react";
import { Layout } from "../components/layout";
import { Search } from "../search/search";
import { City } from "../city/city";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { setActiveCity } from "../city/city-slice";

export function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveCity({ id: "215854", name: "Tel Aviv" }));
  }, []);

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

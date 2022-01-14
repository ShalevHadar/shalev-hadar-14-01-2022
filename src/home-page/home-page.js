import React from "react";
import { Layout } from "../components/layout";
import { Search } from "../search/search";
import { City } from "../city/city";

export function Homepage() {
  return (
    <Layout>
      <Search />
      <City />
    </Layout>
  );
}

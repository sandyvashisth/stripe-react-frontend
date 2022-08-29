import React from "react";
import { Layout } from "../common/Layout";
import { FeatureCollection } from "../FeatureCollection";
import { Hero } from "../Hero";
import { MainSection } from "../MainSection";

export const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <MainSection />
      <FeatureCollection />
    </Layout>
  );
};

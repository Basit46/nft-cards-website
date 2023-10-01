import React from "react";
import Category from "./sections/Category";
import Collections from "./sections/Collections";
import Community from "./sections/Community";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Rarity from "./sections/Rarity";
import Roadmap from "./sections/Roadmap";
import Stats from "./sections/Stats";
import Team from "./sections/Team";
import TheFuture from "./sections/TheFuture";

const App = () => {
  return (
    <div className="max-w-[1366px] mx-auto w-full font-RobotoMono">
      <Navbar />
      <Hero />
      <TheFuture />
      <Stats />
      <Category />
      <Collections />
      <Roadmap />
      <Rarity />
      <Team />
      <FAQ />
      <Community />
      <Footer />
    </div>
  );
};

export default App;

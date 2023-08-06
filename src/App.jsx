import React from "react";
import "./App.css";

import Header from "./Header";
import Landing from "./Landing";
import Portfolio from "./Portfolio";
import Comments from "./Comments";
import Pricing from "./Pricing";
import News from "./News";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";
import Bottom from "./Bottom";

const App = () => {
  return (
    <>
      <Header />
      <Landing />
      <Portfolio />
      <Comments />
      <Pricing />
      <News />
      <Clients />
      <Contact />
      <Footer />
      <Bottom />
    </>
  );
};

export default App;

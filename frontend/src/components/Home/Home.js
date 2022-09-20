import React from "react";
import About from "./About";
import HomeCaroussel from "./HomeCaroussel";
import Partners from "./Partners";
import EventSearchBar from "../EventsComponents/EventSearchBar";

function Home() {
  return (
    <>
      <HomeCaroussel></HomeCaroussel>
      <About></About>
      <Partners></Partners>

      <EventSearchBar></EventSearchBar>
    </>
  );
}

export default Home;

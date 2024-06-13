import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* MainContainer
            - Video Background 
            - Video Title
          Secondary Container
            - Movies List
            - Movie cards
      */}
    </div>
  );
};

export default Browse;

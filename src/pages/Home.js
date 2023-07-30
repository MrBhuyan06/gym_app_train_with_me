import React from "react";
// import { useState } from "react";
import { Box } from "@mui/material";
import SearchExercises from "../components/SearchExercises.js";
import Exercises from "../components/Exercises.js";
import HeroBaner from "../components/HeroBaner.js";

const Home = () => {
  return (
    <Box>
      <HeroBaner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;

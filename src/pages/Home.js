import React, { useState } from "react";
// import { useState } from "react";
import { Box } from "@mui/material";
import SearchExercises from "../components/SearchExercises.js";
import Exercises from "../components/Exercises.js";
import HeroBaner from "../components/HeroBaner.js";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercise, setExercise] = useState([]);
  return (
    <Box>
      <HeroBaner />
      <SearchExercises
        setExercise={setExercise}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercise={setExercise}
        bodyPart={bodyPart}
        exercise={exercise}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default Home;

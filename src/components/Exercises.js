import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { fetchExerciseData, api_Options } from "../utils/constant.js";
import ExerciseCard from "./ExerciseCard.js";

const Exercises = ({ setExercise, exercise, bodyPart }) => {
  console.log(exercise);
  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Exercises On its Way ❤️
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercise.map((exe) => {
          return <ExerciseCard key={exe.id} data={exe} />;
        })}
      </Stack>
    </Box>
  );
};

export default Exercises;

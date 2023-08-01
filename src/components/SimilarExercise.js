import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import ExerciseCard from "./ExerciseCard.js";
import Loader from "./Loader.js";
const SimilarExercise = ({ targetMuscle, equipmentData }) => {
  return (
    <Box sx={{ marginTop: { lg: "40px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, textAlign: "center" }}
        fontWeight={700}
        color="#fff"
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#4db5ff", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "20px", xs: "20px" } }}
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
      >
        {!targetMuscle?.length ? (
          <Loader />
        ) : (
          targetMuscle?.slice(0, 3).map((item, index) => {
            return <ExerciseCard key={index} data={item} visible="true" />;
          })
        )}
      </Stack>
      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          textAlign: "center",
          marginTop: "30px",
        }}
        fontWeight={700}
        color="#fff"
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#4db5ff", textTransform: "capitalize" }}>
          Equipment
        </span>{" "}
        exercises
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "20px", xs: "20px" } }}
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
      >
        {!equipmentData?.length ? (
          <Loader />
        ) : (
          equipmentData?.slice(0, 3).map((item, index) => {
            return <ExerciseCard key={index} data={item} visible="true" />;
          })
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercise;

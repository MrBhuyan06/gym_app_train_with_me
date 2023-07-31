import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchExerciseData, api_Options } from "../utils/constant.js";
import Details from "../components/Details.js";
import ExerciseVideo from "../components/ExerciseVideo.js";
import SimilarExercise from "../components/SimilarExercise.js";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetxhExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchExerciseData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        api_Options
      );
      // console.log(exerciseDetailData);
      setExerciseDetail(exerciseDetailData);
    };
    fetxhExerciseData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideo />
      <SimilarExercise />
    </Box>
  );
};

export default ExerciseDetails;

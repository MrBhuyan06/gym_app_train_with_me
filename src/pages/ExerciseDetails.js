import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {
  fetchExerciseData,
  api_Options,
  api_options_youtube,
} from "../utils/constant.js";
import Details from "../components/Details.js";
import ExerciseVideo from "../components/ExerciseVideo.js";
import SimilarExercise from "../components/SimilarExercise.js";
import Loader from "../components/Loader.js";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [youTubeExeData, setyouTubeExeData] = useState([]);
  const [targetMuscleData, setTargetMuscleData] = useState([]);
  const [equipmentData, setEquipmentData] = useState([]);
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
      console.log(exerciseDetailData);
      const youtubeExeData = await fetchExerciseData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        api_options_youtube
      );

      const targetMuscleExeData = await fetchExerciseData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        api_Options
      );
      console.log(targetMuscleExeData);
      const equimentExeData = await fetchExerciseData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        api_Options
      );
      console.log(equimentExeData);

      // console.log(exerciseDetailData);
      setExerciseDetail(exerciseDetailData);
      setyouTubeExeData(youtubeExeData.contents);
      setEquipmentData(equimentExeData);
      setTargetMuscleData(targetMuscleExeData);
    };
    fetxhExerciseData();
  }, [id]);
  if (!exerciseDetail) return <Loader />;
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideos={youTubeExeData}
        name={exerciseDetail.name}
      />
      <SimilarExercise
        targetMuscle={targetMuscleData}
        equipmentData={equipmentData}
      />
    </Box>
  );
};

export default ExerciseDetails;

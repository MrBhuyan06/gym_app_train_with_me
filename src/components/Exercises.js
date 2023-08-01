import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { fetchExerciseData, api_Options } from "../utils/constant.js";
import ExerciseCard from "./ExerciseCard.js";

const Exercises = ({ setExercise, exercise, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log(typeof exercise);
  console.log(exercise);
  const [exePerPage] = useState(6);
  //update the current page
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  //for categories data bodyPart
  useEffect(() => {
    const getExeceriseData = async () => {
      let exeData = [];
      if (bodyPart === "all") {
        exeData = await fetchExerciseData(
          "https://exercisedb.p.rapidapi.com/exercises",
          api_Options
        );
      } else {
        exeData = await fetchExerciseData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          api_Options
        );
        console.log(exeData);
      }
      setExercise(exeData);
    };
    getExeceriseData();
  }, [bodyPart]);

  //pagination logic
  const indexOfLastExe = currentPage * exePerPage;
  const indexOfFirstExe = indexOfLastExe - exePerPage;
  const numberCurrentExe = exercise?.slice(indexOfFirstExe, indexOfLastExe);

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
        {numberCurrentExe.map((exe) => {
          return <ExerciseCard key={exe.id} data={exe} />;
        })}
      </Stack>
      <Stack
        sx={{ mt: { lg: "114px", xs: "70px" }, color: "#fff" }}
        alignItems="center"
      >
        {exercise.length > 9 && (
          <Pagination
            color="primary"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercise.length / exePerPage)}
            page={currentPage}
            onChange={paginate}
            //bydefault=(e) => paginate(e,value)
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;

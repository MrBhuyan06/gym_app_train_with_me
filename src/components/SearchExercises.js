import React, { useEffect, useState } from "react";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import { fetchExerciseData } from "../utils/constant.js";
import { api_Options } from "../utils/constant.js";
import { RAPI_API_URL } from "../utils/constant.js";
import { getCategory } from "../utils/constant.js";
import useCategories from "../utils/useCategories.js";

const SearchExercises = () => {
  //Search Text
  const [search, setSearchTxt] = useState("");
  const [exercise, setExercise] = useState([]);

  //get Ccategoriesfrom the hook
  const categories = useCategories();

  //handleSearch
  const handleSearch = async () => {
    //search=> true
    if (search) {
      const exerciseData = await fetchExerciseData(
        "https://exercisedb.p.rapidapi.com/exercises",
        api_Options
      );
      const searchExercisesData = exerciseData.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
        );
      });
      //   console.log(searchExercisesData);
      setSearchTxt("");
      setExercise(searchExercisesData);
    }
  };
  console.log(categories);
  return (
    <Stack
      //   direction={"column"}
      alignItems={"center"}
      mt="37px"
      justifyContent={"center"}
      p="20px"
    >
      <Typography
        fontWeight="700"
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercise <br />
        Should Know
      </Typography>
      <Box position={"relative"} mb="72px">
        <TextField
          className="about__card"
          height="76px"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              color: "#fff",
              borderRadius: "4px",

              "&:hover": {
                backgroundColor: "transparent",
                borderColor: "rgba(77, 181, 255, 0.4)",
                // transition: "backgroundColor 2s liner",
              },
            },
            width: {
              lg: "1100px",
              xs: "250px",
            },

            bgcolor: "rgba(77, 181, 255, 0.4)",

            "&:hover": {
              backgroundColor: "transparent",
              borderColor: "rgba(77, 181, 255, 0.4)",
              // transition: "backgroundColor 2s liner",
            },
            borderRadius: "10px",
          }}
          value={search}
          onChange={(e) => {
            setSearchTxt(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="btn"
          sx={{
            bgcolor: "#4db5ff",
            color: "#fff",
            textTransfrom: "none",
            width: {
              lg: "175px",
              xs: "80px",
            },
            fontSize: {
              lg: "20px",
              xs: "14px",
            },
            height: "56px",
            position: "absolute",
            right: "0",

            "&:hover": {
              backgroundColor: "#fff",
              borderColor: "rgba(77, 181, 255, 0.4)",
              // transition: "backgroundColor 2s liner",
            },
          }}
          //onClik
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;

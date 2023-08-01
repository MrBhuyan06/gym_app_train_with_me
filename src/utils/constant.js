import { json } from "react-router-dom";

export const RAPI_API_URL =
  "  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',";
export const RAPI_API_YOUTUBE =
  "https://youtube-search-and-download.p.rapidapi.com/channel/about";

export const api_Options = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

//fetchDATA
export const fetchExerciseData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const api_options_youtube = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

//getCategory
export const getCategory = async () => {
  const res = await fetch(
    "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    api_Options
  );
  const categoryData = await res.json();
  return categoryData;
};

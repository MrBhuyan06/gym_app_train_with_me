import React, { useState, useEffect } from "react";
import { getCategory } from "./constant.js";
const useCategories = () => {
  const [exerciseCategories, setExerciseCategories] = useState([]);
  useEffect(() => {
    const fetchCategoryData = async () => {
      const categoriesData = await getCategory();
      setExerciseCategories(["all", ...categoriesData]);
    };
    fetchCategoryData();
  }, []);
  return exerciseCategories;
};

export default useCategories;

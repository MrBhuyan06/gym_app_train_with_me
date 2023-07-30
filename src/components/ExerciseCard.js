import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ data }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${data.id}`}>
      <img src={data.gifUrl} alt={data.name} loading="lazy" />
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
        <Button
          sx={{
            // ml: "21px",
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {data.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {data.target}
        </Button>
      </Stack>
      <Typography
        // ml="21px"
        color="#fff"
        fontWeight="bold"
        sx={{ fontSize: { lg: "1rem", xs: "0.9rem" } }}
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {data.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;

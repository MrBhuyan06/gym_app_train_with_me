import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader.js";
const ExerciseVideo = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;
  return (
    <Box sx={{ marginTop: { lg: "100px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, textAlign: "center" }}
        fontWeight={700}
        color="#fff"
        mb="33px"
      >
        Watch{" "}
        <span
          style={{
            color: "#4db5ff",
            textTransform: "capitalize",
          }}
        >
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "20px", xs: "20px" } }}
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => {
          return (
            <a
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              key={index}
              className="exercise-video"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ borderTopLeftRadius: "20px" }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <Box>
                <Typography
                  sx={{ fontSize: { lg: "18px", xs: "18px" }, mt: "20px" }}
                  fontWeight={600}
                  color="#fff"
                >
                  {item.video.title}
                </Typography>
                <Typography fontSize="14px" color="rgba(255, 255, 255, 0.6)">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;

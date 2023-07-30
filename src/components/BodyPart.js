import React from "react";
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack className="about__cards react-horizontal-scrolling-menu--wrapper">
      {item}
    </Stack>
  );
};

export default BodyPart;

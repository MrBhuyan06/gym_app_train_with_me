import React from "react";
import { Stack, Typography } from "@mui/material";
import { GiGymBag } from "react-icons/gi";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      className="about__cards "
      sx={{
        borderTop: bodyPart === item ? "5px solid #4db5ff" : "",
        boxShadow: bodyPart === item ? 2 : "",
      }}
      onClick={() => {
        setBodyPart(item);
        console.log(item);
        console.log(bodyPart);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <div className="body-part">
        <p
          style={{
            fontSize: "20px",
          }}
        >
          {item}
        </p>
        <Typography>
          <GiGymBag className="icons" />
        </Typography>
      </div>
    </Stack>
  );
};

export default BodyPart;

import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BODYPART from "../assets/body-part.png";
import EQUI from "../assets/equiment.png";
import TARGET from "../assets/target.png";
import { BorderBottom } from "@mui/icons-material";

const Details = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BODYPART,
      name: bodyPart,
    },
    {
      icon: TARGET,
      name: target,
    },
    {
      icon: TARGET,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        mt: "50px",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <div className="detail-card">
        <img src={gifUrl} alt={name} loading="lazy" />
      </div>
      {/* <img src={gifUrl} alt={name} loading="lazy" className="detail-image" /> */}
      <Stack
        // flexGrow={0.5}

        sx={{
          gap: { lg: "20px", xs: "20px" },
          width: {
            lg: "60%",
            xs: "100%",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: "50px", xs: "30px" },
            borderBottom: "3px solid #4db5ff",
          }}
          fontWeight={700}
          textTransform="capitalize"
          textAlign={"center"}
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "20px", xs: "18px" } }}
          color="rgba(255, 255, 255, 0.6)"
        >
          Regular physical activities help maintain your strength.{" "}
          <span
            style={{
              textTransform: "capitalize",
              borderBottom: "3px solid #4db5ff",
            }}
          >
            {name}{" "}
          </span>
          are among the top exercises for targeting your {target}. Engaging in
          this workout can uplift your mood and boost your energy levels.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;

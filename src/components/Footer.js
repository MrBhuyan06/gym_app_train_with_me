import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Me from "../assets/bodybg.png";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="rgba(77, 181, 255, 0.4)">
      <Stack
        gap="40px"
        sx={{
          alignItems: "center",
          flexDirection: {
            lg: "row",
            xs: "column",
          },
        }}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <Link to="/">
          <div className="logo">
            <img src={Me} alt="" />
          </div>
        </Link>
      </Stack>
      <Typography
        variant="h5"
        sx={{
          fontSize: { lg: "28px", xs: "20px" },
          marginTop: {
            lg: "-41px",
            xs: "30px",
          },
        }}
        mt="-41px"
        ml="23px"
        textAlign="center"
        pb="40px"
      >
        Made with ❤️ by Abhishek Bhuyan 💪
      </Typography>
    </Box>
  );
};

export default Footer;

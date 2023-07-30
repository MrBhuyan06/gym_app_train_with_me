import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import ME from "../assets/bodybg.png";
const HeroBaner = () => {
  return (
    <Box
      sx={{
        mt: {
          lg: "20px",
          xs: "20px",
        },
        ml: {
          sm: "50px",
        },
      }}
      position="relative"
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexBasis={1}
      >
        <Stack>
          <Typography
            color="#4db5ff"
            fontWeight="600"
            fontSize="28px"
            mt="100px"
          >
            Train With Me
          </Typography>
          <Typography
            fontWeight="700"
            sx={{
              fontSize: {
                lg: "44px",
                xs: "40px",
              },
            }}
            mb="20px"
            mt="20px"
          >
            Sweat, Smile <br /> and Repeat
          </Typography>
          <Typography
            color="#ff2625"
            fontWeight="200"
            fontSize="22px"
            lineHeight="35px"
            mb="20px"
          >
            Chek Out the most effective exercise
          </Typography>
          <Button
            className="btn-primary"
            variant="contained"
            sx={{
              width: "250px",
              mb: "20px",
            }}
            href="#exercises"
          >
            Explore Exercises
          </Button>
          <Typography
            color="#4db5ff"
            fontWeight="600"
            fontSize="100px"
            lineHeight="35px"
            mb="20px"
            mt="30px"
            sx={{
              opacity: 0.1,
              display: {
                lg: "block",
                xs: "none",
              },
            }}
          >
            DONT GIVE UP
          </Typography>
        </Stack>
        <Stack>
          <div className="me">
            <img src={ME} alt="" srcSet="" />
          </div>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HeroBaner;

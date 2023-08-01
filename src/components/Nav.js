import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
// import LOGO from "../assets/Logo.png";
import Me from "../assets/bodybg.png";
const Nav = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: {
          sm: "32px",
          xs: "20px",
        },
        justifyContent: "none",
        px: "20px",
      }}
    >
      <Link to="/">
        <div className="logo">
          <img src={Me} alt="" />
        </div>
      </Link>
      <Stack
        direction={"row"}
        // border={"1px solid red"}
        ml={"auto"}
        gap="40px"
        fontSize={"24px"}
        alignItems={"flex-end"}
      >
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            borderBottom: "3px solid #4db5ff",
          }}
        >
          HOME
        </Link>
        <a href="#exercise" style={{ textDecoration: "none", color: "#fff" }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Nav;

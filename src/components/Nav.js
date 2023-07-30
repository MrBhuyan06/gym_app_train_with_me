import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import LOGO from "../assets/Logo.png";
const Nav = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
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
        <img
          src={LOGO}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        direction={"row"}
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

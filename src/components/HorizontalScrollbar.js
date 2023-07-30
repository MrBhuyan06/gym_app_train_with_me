import React, { useRef, useEffect } from "react";
import { Box, Stack } from "@mui/material";

import { useContext } from "react";
import BodyPart from "./BodyPart.js";
import Right from "../assets/right-arrow.png";
import Left from "../assets/left-arrow.png";
import { Typography } from "@mui/material";

const HorizontalScrollbar = ({
  data,
  bodyPart,
  setBodyPart,
  scrollValue,
  flag,
}) => {
  const rowContainer = useRef();
  // const { scrollPrev } = useContext(VisibilityContext);
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      className="h-scroll"
      ref={rowContainer}
      style={
        flag
          ? {
              overflowX: "scroll",
              scrollbarWidth: "none",
            }
          : {
              overflowX: "hidden",
            }
      }
    >
      {data.map((item) => (
        <Box
          //   className="h-scroll"
          direction={"row"}
          key={item.id || item}
          itemId={item.id || item}
          tittle={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;

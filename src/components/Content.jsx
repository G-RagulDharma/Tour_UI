import Box from "@mui/material/Box";
import React from "react"
import Tourcard from "./Tourcard";

const Content = (props) => {
  return (
    <Box  flex={2} padding={3}>
      <Tourcard/>
      <Tourcard/>
      <Tourcard/>
      <Tourcard/>
    </Box>
  )
};

export default Content;

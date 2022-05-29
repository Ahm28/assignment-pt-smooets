import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <Box
        component="div"
        sx={{
          backgroundColor: "black",
          color: "white",
          p: "5px 0",
          textAlign: "center",
        }}
      >
        <Typography variant="caption">Ahmad Mughni</Typography>
      </Box>
    </footer>
  );
}

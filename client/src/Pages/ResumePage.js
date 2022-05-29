import { Box } from "@mui/system";
import React from "react";
import HeroesComp from "../Components/Heroes/HeroesComp";
import Profile from "../Components/Profile/Profile";

export default function Resume() {
  return (
    <Box>
      <HeroesComp />
      <Profile />
    </Box>
  );
}

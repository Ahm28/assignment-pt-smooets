import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#F9FBFF", mt: 3 }}>
      <Container>
        <Grid container spacing={3} sx={{ alignItems: "center" }}>
          <Grid item xs={6}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Make Your Profile Website!
            </Typography>
            <Typography sx={{ fontWeight: "light", mt: 2, color: "#727272" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              iure ad totam voluptate eius esse veniam ullam, cum molestiae,
            </Typography>
            <Button variant="contained" sx={{ mt: 3, fontWeight: "bold" }}>
              Start Now
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              pt: 2,
              background: "url(/assets/bg-Hero.png) no-repeat",
              backgroundSize: "550px",
              // backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 50%",
            }}
          >
            <img src="/assets/hero.png" alt="Hero Pict" width="500px" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

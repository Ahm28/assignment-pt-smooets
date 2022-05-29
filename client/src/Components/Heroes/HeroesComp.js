import { Box } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import { API } from "../../config/api";

export default function HeroesComp({ profile }) {
  return (
    <Box component="div" sx={{ backgroundColor: "#dce4e4", mt: 3 }}>
      <Container>
        <Grid
          container
          spacing={3}
          alignItems="center"
          //   direction={{ xs: "row", md: "column" }}
          columns={{ xs: 6, md: 12 }}
          sx={{ padding: { xs: 4, md: 0 } }}
        >
          <Grid item xs={6}>
            <Box
              component="div"
              sx={{
                display: "flex",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#ec563d",
              }}
            ></Box>
            <Typography variant="h3" sx={{ fontWeight: "bold", my: 3 }}>
              I'm {profile ? profile.username : "Your Name"}
            </Typography>
            <Typography variant="subtitle2" sx={{ mb: 3, fontWeight: "bold" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              iure ad totam voluptate eius esse veniam ullam, cum molestiae,
              adipisci, eligendi officiis placeat laboriosam natus!
            </Typography>
            <Typography variant="caption">
              Image from <i>Freepick</i>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <img
              src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/0e95beed2bb75de6a1273791/vv-min.jpg"
              alt="profile Heroes"
              width="650px"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

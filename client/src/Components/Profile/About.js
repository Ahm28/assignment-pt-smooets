import { Box, Typography, Container, Grid } from "@mui/material";
import React from "react";

export default function About({ profile }) {
  return (
    <Box component="div" sx={{ my: 10 }}>
      <Container>
        <Box
          component="div"
          sx={{ borderBottom: "8px solid #ec563d", width: "230px", pb: 3 }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            About Me
          </Typography>
        </Box>
        <Box component="div" sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: "bold", width: "500px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            est cum aliquam ad, ipsum quisquam?
          </Typography>
          <Typography sx={{ width: "500px", my: 3 }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
            ad assumenda nisi ex unde repellat iure sunt accusamus labore
            aperiam eius molestiae vitae veritatis maxime voluptatem facilis
            odio esse necessitatibus.
          </Typography>
          <img
            src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/7a6ab475027f5b3d9e4cf5a0/dfdff-min.jpg"
            alt="pict"
            width="900px"
          />
          <Grid container spacing={3}>
            <Grid item>
              <Typography sx={{ width: "500px", my: 3, lineHeight: "2" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                consectetur blanditiis provident officia cupiditate, commodi
                natus eos adipisci aut facilis a porro doloribus ut. Iure
                reprehenderit facere fuga voluptas, labore veritatis dolore
                perferendis officia hic.
              </Typography>
            </Grid>
            <Grid item>
              <Box
                component="div"
                sx={{
                  backgroundColor: "#ec563d",
                  color: "white",
                  p: 5,
                  mt: "-100px",
                }}
              >
                <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                  EMAIL
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  {profile ? profile.email : "your email"}
                </Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  ROLE
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  {profile
                    ? profile.profile == null
                      ? "Your Role"
                      : profile.profile.role
                    : "Your"}
                </Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  PHONE
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  +62
                  {profile
                    ? profile.profile == null
                      ? "Your Location"
                      : profile.profile.phone
                    : "Your"}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

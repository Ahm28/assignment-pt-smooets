import { Container, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Profile({ profile }) {
  console.log(profile);

  const text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquamiure ad totam voluptate eius esse veniam ullam, cum molestiae,adipisci, eligendi officiis placeat laboriosam natus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquamiure ad totam voluptate eius esse veniam ullam, cum molestiae,adipisci, eligendi officiis placeat laboriosam natus!";

  return (
    <Box sx={{ mt: 8 }}>
      <Container>
        <Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              PROFILE
            </Typography>
            <Typography>I'm a Frontend Developer (React JS)</Typography>
          </Box>

          <Box sx={{ mt: 5 }}>
            <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
              <Grid item xs={4}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 4 }}>
                  About Me
                </Typography>
                <Typography sx={{ mb: 3, lineHeight: "2" }}>
                  {profile
                    ? profile.profile == null
                      ? text
                      : profile.profile.about
                    : "lorem"}
                </Typography>
                <Typography variant="caption">
                  Image from <i>Freepick</i>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/9b775fb1c1015e6eb9088881/vbb.jpg"
                    alt="Profile pict"
                    width="200px"
                    style={{ borderRadius: "50%" }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ textAlign: { xs: "center", md: "left" }, mt: 3 }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 4 }}>
                  Details
                </Typography>
                <ProfileData
                  title="Name"
                  desc={profile ? profile.username : "Your Name"}
                />
                <ProfileData
                  title="Age"
                  desc={
                    profile
                      ? profile.profile == null
                        ? "Your Age"
                        : `${profile.profile.old} years`
                      : "Your"
                  }
                />
                <ProfileData
                  title="Location"
                  desc={
                    profile
                      ? profile.profile == null
                        ? "Your Location"
                        : `${profile.profile.address} years`
                      : "Your"
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function ProfileData(props) {
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", my: 1 }}>
        {props.title} :
      </Typography>
      <Typography>{props.desc} </Typography>
    </Box>
  );
}

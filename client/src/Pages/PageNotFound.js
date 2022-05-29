import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <Box
        component="div"
        sx={{
          textAlign: "center",
          height: "86vh",
          m: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Sorry, this page isn't available.
          </Typography>
          <Typography sx={{ mt: 4 }}>
            The Link you followed maybe broken, or the page may have been
            removed.{" "}
            <Link to="/" style={{ color: "blue", textDecoration: "none" }}>
              {" "}
              <i> Go Back to Home. </i>
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

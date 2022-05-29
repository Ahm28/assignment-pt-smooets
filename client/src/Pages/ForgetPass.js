import {
  Container,
  Typography,
  TextField,
  Button,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { Link } from "react-router-dom";

export default function ForgetPass() {
  return (
    <>
      <Container sx={{ height: "86vh", py: 8 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" fontWeight="bold">
            Forget Your password?
          </Typography>
          <Typography>
            please enter the email that has been registered
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Card sx={{ p: 4 }}>
            <CardContent>
              <TextField
                required
                id="outlined-required"
                label="Email"
                sx={{ width: "100%", mb: 2 }}
                helperText="Email cannot be empty"
                //   value={}
                //   onChange={}
              />
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button variant="outlined" sx={{ mr: 2, width: "47%" }}>
                  Cancel
                </Button>
              </Link>
              <Button variant="contained" type="submit" sx={{ width: "47%" }}>
                Send
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}

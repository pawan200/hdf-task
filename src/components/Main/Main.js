import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Button,
} from "@mui/material";
import Home from "../Home/Home";
import { Link } from "react-router-dom";

const theme = createTheme();

const Main = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            HDB Finance
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            sx={{ position: "absolute", right: 40 }}
            component={Link}
            to="/match"
          >
            Match
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Validation Form
          </Typography>
          {<Home />}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Main;

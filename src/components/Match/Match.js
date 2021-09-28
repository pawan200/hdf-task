import React, { useState, useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Button,
  Grid,
  TextField,
  Modal,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme();

const style = {
  fontWeight: 700,
  fontSize: 20,
  color: "#000",
};

const gridStyle = {
  display: "grid",
  flexDirection: "column",
  justifyContent: "center",
  alignItem: "center",
};

const BoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const buttonStyle = { width: 10, marginBottom: 2 };
const textField = { width: 65, marginBottom: 2 };

const newValues = {
  a: "",
  b: "",
  c: "",
  d: "",
};

const Match = (props) => {
  const [values, setValues] = useState(newValues);
  const [count, setCount] = useState(0);
  console.log("count", count);
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = useState(false);
  const textRef = useRef();
  const bRef = useRef();
  const cRef = useRef();
  const aRef = useRef();

  const checkInitialValues = {
    a: "1",
    b: "2",
    c: "3",
    d: "4",
  };
  const matchTest = (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3} sx={gridStyle}>
        <Button variant="contained" color="inherit" disabled sx={buttonStyle}>
          <Typography sx={style}>A</Typography>
        </Button>
        <Button variant="text" disabled sx={buttonStyle}>
          <Typography sx={style}>1</Typography>
        </Button>
      </Grid>
      <Grid item xs={12} sm={3} sx={gridStyle}>
        <Button variant="contained" color="inherit" disabled sx={buttonStyle}>
          <Typography sx={style}>B</Typography>
        </Button>
        <Button variant="text" disabled sx={buttonStyle}>
          <Typography sx={style}>2</Typography>
        </Button>
      </Grid>
      <Grid item xs={12} sm={3} sx={gridStyle}>
        <Button variant="contained" color="inherit" disabled sx={buttonStyle}>
          <Typography sx={style}>C</Typography>
        </Button>
        <Button variant="text" disabled sx={buttonStyle}>
          <Typography sx={style}>3</Typography>
        </Button>
      </Grid>
      <Grid item xs={12} sm={3} sx={gridStyle}>
        <Button variant="contained" color="inherit" disabled sx={buttonStyle}>
          <Typography sx={style}>D</Typography>
        </Button>
        <Button variant="text" disabled sx={buttonStyle}>
          <Typography sx={style}>4</Typography>
        </Button>
      </Grid>
    </Grid>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkInitialValues.a === values.a) {
      aRef.current.style.backgroundColor = "green";
      aRef.current.style.color = "#fff";
      setCount((prevCount) => {
        return prevCount + 1;
      });
    } else {
      aRef.current.style.backgroundColor = "red";
      aRef.current.style.color = "#fff";
    }
    if (checkInitialValues.b === values.b) {
      bRef.current.style.backgroundColor = "green";
      bRef.current.style.color = "#fff";
      setCount((prevCount) => {
        return prevCount + 1;
      });
    } else {
      bRef.current.style.backgroundColor = "red";
      bRef.current.style.color = "#fff";
    }
    if (checkInitialValues.c === values.c) {
      cRef.current.style.backgroundColor = "green";
      cRef.current.style.color = "#fff";
      setCount((prevCount) => {
        return prevCount + 1;
      });
    } else {
      cRef.current.style.backgroundColor = "red";
      cRef.current.style.color = "#fff";
    }
    if (checkInitialValues.d === values.d) {
      textRef.current.style.backgroundColor = "green";
      textRef.current.style.color = "#fff";
      setCount((prevCount) => {
        return prevCount + 1;
      });
    } else {
      textRef.current.style.backgroundColor = "red";
      textRef.current.style.color = "#fff";
    }
    setShow(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClose = () => setOpen(false);

  const handleCheckButton = () => {
    setOpen(true);
  };

  const resetHandler = () => {
    setOpen(false);
    window.location.reload();
  };

  const matchForm = (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Grid Grid container spacing={2} sx={{ my: 10 }}>
          <Grid item xs={12} sm={3} sx={gridStyle}>
            <Button
              variant="contained"
              color="inherit"
              disabled
              sx={buttonStyle}
            >
              <Typography sx={style}>D</Typography>
            </Button>
            <TextField
              id="1"
              type="number"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              inputRef={textRef}
              sx={textField}
              variant="outlined"
              name="d"
              value={values.d}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={3} sx={gridStyle}>
            <Button
              variant="contained"
              color="inherit"
              disabled
              sx={buttonStyle}
            >
              <Typography sx={style}>C</Typography>
            </Button>
            <TextField
              id="2"
              //label="Full Name"
              type="number"
              inputRef={cRef}
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              sx={textField}
              variant="outlined"
              name="c"
              value={values.c}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={3} sx={gridStyle}>
            <Button
              variant="contained"
              color="inherit"
              disabled
              sx={buttonStyle}
            >
              <Typography sx={style}>B</Typography>
            </Button>
            <TextField
              id="3"
              //label="Full Name"
              type="number"
              inputRef={bRef}
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              sx={textField}
              variant="outlined"
              name="b"
              value={values.b}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={3} sx={gridStyle}>
            <Button
              variant="contained"
              color="inherit"
              disabled
              sx={buttonStyle}
            >
              <Typography sx={style}>A</Typography>
            </Button>
            <TextField
              id="4"
              //label="Full Name"
              type="number"
              inputRef={aRef}
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              sx={textField}
              variant="outlined"
              name="a"
              value={values.a}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} align="center" justify="center">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ backgroundColor: "rgba(254,134,104,1)" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={BoxStyle}>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              sx={{ textAlign: "center" }}
            >
              Your total score is
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="h4"
              sx={{ mt: 2, textAlign: "center" }}
            >
              {count} / 4
            </Typography>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2, textAlign: "center" }}
              onClick={resetHandler}
            >
              Retry
            </Button>
          </Box>
        </Modal>
      </form>
      {show && (
        <Grid item xs={12} align="center" justify="center" sx={{ my: -7 }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleCheckButton}
          >
            Check Score
          </Button>
        </Grid>
      )}
    </>
  );

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
            to="/"
          >
            Back
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Match the following
          </Typography>
          {matchTest}

          {matchForm}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Match;

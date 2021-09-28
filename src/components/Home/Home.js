import React, { useState } from "react";
import {
  Box,
  TextField,
  Grid,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";

import AdapterDateFns from "@mui/lab/AdapterDateFns";

const initialValues = {
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  address: "",
  age: "",
  date: new Date(),
  isPermanent: false,
};

const Home = (props) => {
  const [values, setValues] = useState(initialValues);
  console.log("values", values);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.fullName = values.fullName ? "" : "Full Name is required.";
    // temp.mobile = values.mobile.length > 9 ? "" : "Minimum 10 number required";
    temp.mobile = /^\d{10}$/.test(values.mobile)
      ? ""
      : "Invalid number; must be ten digits";
    temp.email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      values.email
    )
      ? ""
      : "Email is not valid";
    temp.address = values.address ? "" : "Address is required";
    temp.company = values.company ? "" : "Company Name is required";
    temp.age = values.age.length !== 0 ? "" : "Age Name is required";
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newContact = values;
      console.log("newContact", newContact);
      setValues({});
    }
  };

  const handleDateChange = (e) => {
    setValues({
      ...values,
      date: e,
    });
  };

  const handleCheckBoxChange = (e) => {
    setValues({
      ...values,
      isPermanent: e.target.checked,
    });
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "100%",
        },
        "& .MuiFormControl-root": {
          m: 1,
          width: "100%",
        },
        "& .MuiButton-root": {
          m: 1,
        },
      }}
    >
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              error={errors.fullName}
              fullWidth
              id="Name"
              label="Full Name"
              variant="outlined"
              name="fullName"
              value={values.fullName}
              onChange={handleInputChange}
              helperText={errors && errors.fullName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="gender"
                value={values.gender}
                onChange={handleInputChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />

                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={errors.mobile}
              fullWidth
              id="Phone number"
              label="Phone number"
              variant="outlined"
              name="mobile"
              value={values.mobile}
              onChange={handleInputChange}
              helperText={errors && errors.mobile}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              error={errors.email}
              fullWidth
              id="Email"
              label="Email"
              variant="outlined"
              name="email"
              value={values.email}
              onChange={handleInputChange}
              helperText={errors && errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth error={errors.age}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                //error={errors.age}
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={values.age}
                onChange={handleInputChange}
                label="Age"
                name="age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>{errors && errors.age}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/dd/yyyy"
                name="date"
                value={values.date}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={errors.address}
              fullWidth
              id="Address"
              label="Address"
              variant="outlined"
              multiline
              rows={3}
              name="address"
              value={values.address}
              onChange={handleInputChange}
              helperText={errors && errors.address}
            />
          </Grid>
          <Grid item xs={10}></Grid>

          <Grid item xs={2}>
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
      </form>
    </Box>
  );
};

export default Home;

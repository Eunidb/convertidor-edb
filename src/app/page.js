"use client";
import React from "react";
import Chart from "./components/chart/chart";
import {
  IconButton,
  Typography,
  Container,
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function Home() {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #80DBF5, #59ADFA)",
        padding:'25px'
      }}
    >
      <Paper elevation={3} className="p-6 rounded-lg shadow-lg bg-white">
        <IconButton 
        sx={{
          color:'white',
          float:'right',
          background:'red '
        }}
        aria-label="close">
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" gutterBottom className="text-center text-purple-800">
          CURRENCY CONVERTER 
        </Typography>
        <Typography variant="p" gutterBottom className="text-center text-black-300">
           1 dhs equals
        </Typography>
        <form className="p-24 bg-white rounded rounded-lg shadow-md custom-form">
          <div className="mb-4 custom-div">
            <TextField label="" variant="outlined" fullWidth required />
          </div>
          <div className="mb-4 custom-div">
            <Select
              labelId="currency-select-label"
              id="currency-select"
              defaultValue=""
              fullWidth
            >
              <MenuItem value="MXN">Mexico (MXN)</MenuItem>
              <MenuItem value="JPY">Japan (JPY)</MenuItem>
              <MenuItem value="CNY">China (CNY)</MenuItem>
              <MenuItem value="EUR">Euro (EUR)</MenuItem>
              <MenuItem value="USD">United States (USD)</MenuItem>
            </Select>
          </div>
          <Button
            variant="contained"
            fullWidth
            type="submit"
            className="bg-blue-800 text-white"
          >
            Enviar
          </Button>
        </form>
        <Chart className="bg-blue-200"/>
      </Paper>
    </Container>
  );
};



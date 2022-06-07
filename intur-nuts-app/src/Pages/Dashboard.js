import React from "react";
import HomePage from "./HomePage";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Config/theam";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};
export default Dashboard;

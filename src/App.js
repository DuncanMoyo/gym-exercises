import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import { Navbar, Footer } from "./components";
import { Home, ExerciseDetail } from "./pages";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/excercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;

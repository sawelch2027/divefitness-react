import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/home";
import Workouts from "./pages/workouts/workouts";
import Nutrition from "./pages/nutrition/nutrition";
import Assessments from "./pages/assessments/assessments";
import About from "./pages/about/about";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

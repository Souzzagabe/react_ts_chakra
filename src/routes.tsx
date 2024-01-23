import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

export const MappedRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/connexion";
import Register from "./pages/Insciption";
import { Menu } from "@mui/material";
import SimpleBottomNavigation from "./components/Menu";
import { RouteTwoTone } from "@mui/icons-material";
import ProfilePage from "./pages/profil";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<SimpleBottomNavigation />} />
        <Route path="/profil" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;

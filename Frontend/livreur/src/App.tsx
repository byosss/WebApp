import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/connexion";
import Register from "./pages/Insciption";
import { Menu } from "@mui/material";
import SimpleBottomNavigation from "./components/Menu";
import { RouteTwoTone } from "@mui/icons-material";
import ProfilePage from "./pages/profil";
import FormPropsTextFields from "./pages/ModificationProfil";
import Commandes from "./pages/commandes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<SimpleBottomNavigation />} />
        <Route path="/commandes" element={<Commandes />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/modificationprofil" element={<FormPropsTextFields />} />
      </Routes>
    </Router>
  );
}

export default App;

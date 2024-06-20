import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/connexion";
import Register from "./pages/inscription";
import Restaurant from "./pages/restaurant";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/restaurant" element={<Restaurant />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import Restaurant from "./pages/Restaurant";


function App() {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Restaurant" element={<Restaurant />} />
          </Routes>
      </Router>
  );
}

export default App;

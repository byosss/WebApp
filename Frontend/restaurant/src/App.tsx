import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

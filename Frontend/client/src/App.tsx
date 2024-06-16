import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './page/Home';
import Restaurant from './page/Restaurant'
import Register from './components/forms/Register';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
      primary: {
          main: '#007965',
      },
      secondary: {
          main: '#00AF91',
      },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/Restaurant/:id" element={<Restaurant />} />
              
              {/* Redirige les chemins non définis vers la page d'accueil */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    </ThemeProvider>
  );
}

export default App;

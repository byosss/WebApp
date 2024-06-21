import React from 'react';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Dashboard from './pages/Dashboard';
import Userboard from './pages/Userboard';
import Login from './pages/Login';
import Register from './components/forms/Register';

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
      <BrowserRouter>
          <Routes>
            <Route path='/Login' element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Userboard" element={<Userboard />} />
            <Route path="*" element={<Navigate to="/Dashboard" />} />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
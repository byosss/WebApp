import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './page/Home';
import Restaurant from './page/Restaurant'
import Register from './components/forms/Register';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Login from './page/Login';
import Commandes from './page/Commandes';
import Mentions from './page/Mentions';
import { UserProvider } from './context/UserContext';
import { QueryClient, QueryClientProvider } from 'react-query';

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

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Commandes' element={<Commandes />} />
              <Route path='/Mentions Legales' element={<Mentions />} />
              <Route path="/Restaurant/:id" element={<Restaurant />} />
              
              {/* Redirige les chemins non définis vers la page d'accueil */}
              <Route path="*" element={<Navigate to="/" />} />

            </Routes>
        </Router>
        </QueryClientProvider>
        </UserProvider>
    </ThemeProvider>
  );
}

export default App;

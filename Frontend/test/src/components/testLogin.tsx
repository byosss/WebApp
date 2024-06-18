import React from 'react';
import axios from 'axios';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {

  const handleLogin = async (e: React.FormEvent) => {
    
    // faire une requete GET pour checker l'état du micro service Login
    try {
      const response = await axios.post('http://localhost/api/users/login', {
                                                                              email: 'nico@gmail.com',
                                                                              password: 'password'
                                                                            });

      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.id);


      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
    
  );
};

export default Login;

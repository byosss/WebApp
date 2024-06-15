import React, { useState } from 'react';
import axios from 'axios';

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/api/users/register', {
        firstName,
        lastName,
        email,
        password,
        role: 'client'
      });
      console.log(response.data);
      // Vous pouvez ajouter des actions supplémentaires en cas de succès
    } catch (error) {
      console.error('Erreur lors de l\'inscription', error);
      // Vous pouvez ajouter des actions supplémentaires en cas d'erreur
    }
    try {
      const response = await axios.get('http://localhost/api/orders');
      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors de la connexion', error);
      // Vous pouvez ajouter des actions supplémentaires en cas d'erreur
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div>
        <label htmlFor="firstName">firstName:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">lastName:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

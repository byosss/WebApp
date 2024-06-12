import React, { useState } from 'react';
import axios from 'axios';

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/users/register', {
        name,
        email,
        password,
      });
      console.log(response.data);
      // Vous pouvez ajouter des actions supplémentaires en cas de succès
    } catch (error) {
      console.error('Erreur lors de l\'inscription', error);
      // Vous pouvez ajouter des actions supplémentaires en cas d'erreur
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

import React from 'react';
import axios from 'axios';

interface OrderProps {}

const Order: React.FC<OrderProps> = () => {

  const handleOrder = async (e: React.FormEvent) => {
    
    // faire une requete GET pour checker l'état du micro service order
    try {
      // put token in bearer 
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzE5MzVkNmU3NWU2OWMzY2FmZmZmOSIsInJvbGUiOiJjb21tIiwiaWF0IjoxNzE4NzE5NTIzLCJleHAiOjE3MTg3MjMxMjN9.qpa--N2rtLNE-Gj-bujPbcU218hYGYJ9D08QKSLXZXg';
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const response = await axios.get('http://localhost/api/users/test');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    
  };

  return (

    <div>
      <h1>Order</h1>
      <button onClick={handleOrder}>Order</button>
    </div>
    
  );
};

export default Order;

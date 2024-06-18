import React from 'react';
import axios from 'axios';

interface OrderProps {}

const Order: React.FC<OrderProps> = () => {

  const handleOrder = async (e: React.FormEvent) => {
    
    // faire une requete GET pour checker l'état du micro service order
    try {
      // put token in bearer 
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      console.log(token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


      const response = await axios.get(`http://localhost/api/users/${userId}`);
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

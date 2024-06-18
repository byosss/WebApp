import React from 'react';
import axios from 'axios';

interface OrderProps {}

const Order: React.FC<OrderProps> = () => {

  const handleOrder = async (e: React.FormEvent) => {
    
    // faire une requete GET pour checker l'état du micro service order
    try {
      const response = await axios.get('http://localhost/api/restaurants/66709704fe20167c251d479a');
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

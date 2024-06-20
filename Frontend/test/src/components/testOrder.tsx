import React from 'react';
import axios from 'axios';

interface OrderProps {}

const Order: React.FC<OrderProps> = () => {

  const handleOrder = async (e: React.FormEvent) => {
    
    // faire une requete GET pour checker l'état du micro service order
    try {
      // put token in bearer 
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzQwNjg2NzM5ODU3NTZhZmZkMTk1YiIsInJvbGUiOiJjb21tIiwiaWF0IjoxNzE4ODk3NDI1LCJleHAiOjE3MTg5MDEwMjV9.ZsUSlUn_DYo5NcNBY1v76VB9jMFEmLdkj3f2bcL50GE';
      const userId = '66742f17f57b4bc6b4290d28';
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

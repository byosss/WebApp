import React from 'react';
import axios from 'axios';

interface OrderProps {}

const Order: React.FC<OrderProps> = () => {

  const handleOrder = async (e: React.FormEvent) => {
    
    // faire une requete GET pour checker l'état du micro service order
    /*
    try {

      const newRestorer = {
        email: 'aaa@aa.a',
        password: 'a',
        role: 'restorer',
        restaurantName: 'a',
        restaurantAddress: 'a',
        restaurantDescription: 'a'
      };

      const response = await axios.post(`http://localhost/api/users/register`, newRestorer);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    */

    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzQwNjg2NzM5ODU3NTZhZmZkMTk1YiIsInJvbGUiOiJjb21tIiwiaWF0IjoxNzE4OTI3OTY1LCJleHAiOjE3MTg5MzE1NjV9.tF28FciyfMRHM6KqLzgCMEckwUTVoZQmYtS-nJq9HEI';

      // set auth header
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await axios.delete(`http://localhost/api/users/6674068603fe513e5fe2f544`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    
    /*
    try {
      const response = await axios.get(`http://localhost/api/restaurants`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    */
    
  };

  return (

    <div>
      <h1>Order</h1>
      <button onClick={handleOrder}>Order</button>
    </div>
    
  );
};

export default Order;

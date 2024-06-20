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
    const user = {
      email: 'a',
      password: 'a@a.a'
    };
    try {
      const response = await axios.post(`http://localhost/api/users/login`, user);
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

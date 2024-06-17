import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

interface User {
  email: string;
  password: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {

        const headers = {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        };


        const response = await axios.get('http://localhost/api/users', { headers });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User List
      </Typography>
      <List>
        {users.map((user, index) => (
          <ListItem key={index}>
            <ListItemText primary={user.email} secondary={user.password} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default UserList;

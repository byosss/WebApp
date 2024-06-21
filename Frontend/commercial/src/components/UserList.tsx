import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid';
import { Button } from '@mui/material';


type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  role: string;
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 250 },
  { field: "name", headerName: "Nom", width: 150 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "phone", headerName: "Téléphone", width: 150 },
  { field: "state", headerName: "État", width: 100 },
  { field: "role", headerName: "Role", width: 100 },
];

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<GridRowId[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // mettre le token dans le header
        const token = localStorage.getItem('token');
        const headers = new Headers({'Authorization': `Bearer ${token}`});
        const response = await fetch('http://localhost/api/users', { headers });
        const data = await response.json();
        for (let i = 0; i < data.length; i++) {
          data[i].id = data[i]._id;
          if (data[i].role === 'client') {
            data[i].name = data[i].firstName + ' ' + data[i].lastName;
            data[i].email = data[i].email;
            data[i].phone = data[i].phone;
            data[i].state = 'Actif';
            data[i].role = 'Client';
          }
          else if (data[i].role === 'restorer') {
            data[i].name = "/";
            data[i].email = data[i].email;
            data[i].phone = "/";
            data[i].state = 'Actif';
            data[i].role = 'Restorer';
          }
          else if (data[i].role === 'deliverer') {
            data[i].name = data[i].firstName + ' ' + data[i].lastName;
            data[i].email = data[i].email;
            data[i].phone = data[i].phoneNumber;
            data[i].state = 'Actif';
            data[i].role = 'Deliverer';
          }
          else if (data[i].role === 'comm') {
            data[i].name = "/";
            data[i].email = data[i].email;
            data[i].phone = "/";
            data[i].state = 'Actif';
            data[i].role = 'Commercial';
          }
          else if (data[i].role === 'Dev') {
            data[i].name = "/";
            data[i].email = data[i].email;
            data[i].phone = "/";
            data[i].state = 'Actif';
            data[i].role = 'Developer';
          }
        }
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async () => {
    
      const token = localStorage.getItem('token');
      const headers = new Headers({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      });

      for (let i = 0; i < selectedUsers.length; i++) {
        try {
          await fetch(`http://localhost/api/users/${selectedUsers[i]}`, {
            method: 'DELETE',
            headers,
          });
          setUsers(users.filter((user) => user.id !== selectedUsers[i]));
        } 
        catch (error) {
          console.error('Error deleting users:', error);
        }
      }
      setSelectedUsers([]);

      // refresh the users list
      const response = await fetch('http://localhost/api/users', { headers });
      const data = await response.json();
      for (let i = 0; i < data.length; i++) {
        data[i].id = data[i]._id;
        if (data[i].role === 'client') {
          data[i].name = data[i].firstName + ' ' + data[i].lastName;
          data[i].email = data[i].email;
          data[i].phone = data[i].phone;
          data[i].state = 'Actif';
          data[i].role = 'Client';
        }
        else if (data[i].role === 'restorer') {
          data[i].name = "/";
          data[i].email = data[i].email;
          data[i].phone = "/";
          data[i].state = 'Actif';
          data[i].role = 'Restorer';
        }
        else if (data[i].role === 'deliverer') {
          data[i].name = data[i].firstName + ' ' + data[i].lastName;
          data[i].email = data[i].email;
          data[i].phone = data[i].phoneNumber;
          data[i].state = 'Actif';
          data[i].role = 'Deliverer';
        }
        else if (data[i].role === 'comm') {
          data[i].name = "/";
          data[i].email = data[i].email;
          data[i].phone = "/";
          data[i].state = 'Actif';
          data[i].role = 'Commercial';
        }
        else if (data[i].role === 'Dev') {
          data[i].name = "/";
          data[i].email = data[i].email;
          data[i].phone = "/";
          data[i].state = 'Actif';
          data[i].role = 'Developer';
        }
        setUsers(data);
      }
    };

  return (
    <>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={(newSelection: GridRowId[]) => {
          setSelectedUsers(newSelection);
        }}
        sx={{ width: 1150 }}
      />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <Button variant="contained" color="warning" size="large" style={{ marginRight: '16px', width: '200px' }}  onClick={handleDelete} disabled={selectedUsers.length === 0}>
          Suspendre
        </Button>
        <Button variant="outlined" color="error" size="large" style={{ width: '200px' }} onClick={handleDelete} disabled={selectedUsers.length === 0}>
          Supprimer
        </Button>
      </div>
    </>
  );
};

export default UserTable;

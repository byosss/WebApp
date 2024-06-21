import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid';

type Order = {
    id: string;
    client: string;
    restaurant: string;
    deliverer: string;
    state: string;
    createdAt: string;
    ca: number;
};

const columns: GridColDef[] = [
    { field: "client", headerName: "Client", width: 220 },
    { field: "restaurant", headerName: "Restaurant", width: 220 },
    { field: "deliverer", headerName: "Livreur", width: 150 },
    { field: "status", headerName: "État", width: 100 },
    { field: "createdAt", headerName: "Date de création", width: 150},
    { field: "ca", headerName: "Chiffre d'affaire", width: 120 },
];

const OrderTable = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {

            try {
                const token = localStorage.getItem('token');
                const headers = new Headers({'Authorization': `Bearer ${token}`});
                const response = await fetch('http://localhost/api/orders', { headers });
                const data = await response.json();
                for (let i = 0; i < data.length; i++) {
                    data[i].id = data[i]._id;
                    data[i].client = data[i].userId;
                    data[i].restaurant = data[i].restaurantId;
                    data[i].deliverer = data[i].delivererId;
                    data[i].status = data[i].status;
                    data[i].createdAt = data[i].createdAt;
                    data[i].ca = data[i].price*0.2;
                }
                setOrders(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <>
            <DataGrid
                rows={orders}
                columns={columns}
                initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 10 },
                    },
                  }}
            />
        </>
    );
};

export default OrderTable;
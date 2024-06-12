import { Box } from "@mui/material"
import React from "react"
import Register from "../components/forms/Register"
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home() {
    return(
        <React.Fragment>
            <Box sx={{ m: 5}}>
                <QueryClientProvider client={queryClient}>
                    <Register />
                </QueryClientProvider>
            </Box>
        </React.Fragment>
    )
}
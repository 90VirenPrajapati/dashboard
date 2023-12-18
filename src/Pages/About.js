import React from 'react';
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";

const About = () => {
    return (
        <>
            <Box sx={{display:'flex'}}>
                <Sidebar/>
                <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
                    <h1>About</h1>
                </Box>
            </Box>
        </>
    );
};

export default About;
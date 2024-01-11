import React from 'react';
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import ProductList from "../product/ProductList";
import CandleChart from "../components/CandleChart";

const Product = () => {
    return (
        <Box>
            <Box sx={{display: 'flex'}}>
                <Sidebar/>
                <Box component="main" sx={{flexGrow: 1, p: 10,background:'#eeeee4',height: 100 + 'vh'}}>
                    <ProductList/><br/>
                    <CandleChart/>
                </Box>
            </Box>
        </Box>
    );
};

export default Product;
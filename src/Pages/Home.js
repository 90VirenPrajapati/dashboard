import React from 'react';
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import {Card, CardContent, Stack} from "@mui/material";
import '../styles/home.css'
import Accordino from "../components/Accordino";
import BarChart from "../components/BarChart";

const Home = () => {
    return (
        <>
            <Box height={70}>
                <Box sx={{display: 'flex'}}>
                    <Sidebar/>
                    <Box component="main" sx={{flexGrow: 1, p: 10, background: '#eeeee4'}}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Card className='paddingall' elevation={3} sx={{minWidth: 49 + '%', height: 140}}>
                                        <CardContent>
                                            <div>
                                                <span className='pricetitle'> $203K </span><br/>
                                                <span className='pricesubtitle'> Total Income </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className='paddingall' elevation={3} sx={{minWidth: 49 + '%', height: 140}}>
                                        <CardContent>
                                            <div>
                                                <span className='pricetitle'> $203K </span><br/>
                                                <span className='pricesubtitle'> Total Income </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card elevation={3} sx={{maxWidth: 500}}>
                                        <div className='paddingall'>
                                            <span className='pricetitle'> $203K </span><br/>
                                            <span className='pricesubtitle'> Total Income </span>
                                        </div>
                                    </Card>
                                    <Card elevation={3} sx={{maxWidth: 500}}>
                                        <div className='paddingall'>
                                            <span className='pricetitle'> $203K </span><br/>
                                            <span className='pricesubtitle'> Total Income </span>
                                        </div>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={8}>
                                <Card elevation={3} sx={{height: 60 + 'vh'}}>
                                    <CardContent>
                                        <BarChart/>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card elevation={3} sx={{height: 60 + 'vh'}}>
                                    <CardContent>
                                        <Accordino/>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <br/>
                    </Box>

                </Box>
            </Box>
        </>
    );
};

export default Home;
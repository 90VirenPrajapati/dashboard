import React from 'react';
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import Grid from "@mui/material/Grid";
import {Card, CardContent, Stack} from "@mui/material";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import ScatterCharts from "../components/ScatterChart";
import Line from "../components/Line";
import AnimationChart from "../components/AnimationChart";

const About = () => {
    return (
        <>
            <Box sx={{display: 'flex'}}>
                <Sidebar/>
                <Box component="main" sx={{flexGrow: 1}}>
                    <Box>
                        <Box sx={{display: 'flex'}}>
                            <Box component="main" sx={{flexGrow: 1, p: 10, background: '#eeeee4'}}>
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <Stack spacing={2}>
                                            <PieChart/>
                                            <ScatterCharts/>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Stack spacing={2}>
                                            <Card sx={{maxWidth: 500}}>
                                                <AnimationChart/>
                                            </Card>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Card elevation={3} sx={{height: 60 + 'vh'}}>
                                            <CardContent>
                                                <LineChart/>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Card elevation={3} sx={{height: 60 + 'vh'}}>
                                            <Line/>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <br/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default About;
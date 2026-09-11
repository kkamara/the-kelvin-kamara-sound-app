import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@material-ui/styles';
import { Box, Card, CardContent, CardHeader, Divider, Hidden, Grid, Typography, useMediaQuery } from '@material-ui/core';
import ReactAudioPlayer from 'react-audio-player';

import apexChartSound from '../../../../assets/audio/ASMR-DEEPEST-Inner-Ear-Tingles,-3D-Ear-Canal-+-Eardrum-Brain-Penetrating-Scraping-(No-Talking)-320-kbps.mp3';

const soundStyles = {
    width: '100%',
};

const ApexChartCard = (props) => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));
    const matchDownXs = useMediaQuery(theme.breakpoints.down('xs'));
    const audioPlayerRef = React.useRef(null);
    const { chartData } = props;

    React.useEffect(() => {
        const interval = setInterval(() => {
            const audio = audioPlayerRef.current && audioPlayerRef.current.audioEl.current;

            if (audio && Number.isFinite(audio.duration) && audio.duration > 0) {
                audio.currentTime = Math.random() * audio.duration;
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Card>
            <CardHeader
                title={
                    <Typography t="div" className="card-header">
                        Apex Chart Card
                    </Typography>
                }
            />
            <Divider />
            <CardContent>
                <Grid container spacing={2} direction={matchDownMd && !matchDownXs ? 'row' : 'column'}>
                    <Grid item xs={12} sm={7} md={12}>
                        <Chart {...chartData} />
                    </Grid>
                    <Hidden only="sm">
                        <Grid item>
                            <Divider />
                        </Grid>
                    </Hidden>
                    <Grid
                        item
                        container
                        direction={matchDownMd && !matchDownXs ? 'column' : 'row'}
                        justifyContent="space-around"
                        alignItems="center"
                        xs={12}
                        sm={5}
                        md={12}
                    >
                        <Grid item>
                            <Grid container direction="column">
                                <Typography variant="h6">We can do it and it's not just do it.</Typography>
                                <Typography variant="subtitle1" style={{ color: theme.palette.primary.main }}>
                                    + 16.85%
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column">
                                <Typography variant="h6">What are they tryna tell ya?</Typography>
                                <Box color={theme.palette.success.main}>
                                    <Typography variant="subtitle1" color="inherit">
                                        +45.36%
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column">
                                <Typography variant="h6">Erm...</Typography>
                                <Typography variant="subtitle1" style={{ color: theme.palette.warning.main }}>
                                    - 50.69%
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container direction={matchDownMd && !matchDownXs ? 'row' : 'column'}>
                        <label>
                            ASMR DEEPEST Inner Ear Tingles, 3D Ear Canal + Eardrum
                            Brain Penetrating Scraping (No Talking) <i>(320 kbps)</i>
                        </label>
                        <ReactAudioPlayer
                            ref={audioPlayerRef}
                            id="apexChartAudioPlayer1"
                            src={apexChartSound}
                            loop
                            controls
                            style={soundStyles}
                            volume={0.15}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ApexChartCard;

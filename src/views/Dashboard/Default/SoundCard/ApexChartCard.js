import React, { useState } from 'react';
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
    const audioPlayerRef1 = React.useRef(null);
    const audioPlayerRef2 = React.useRef(null);
    const [volume, setVolume] = useState(1);
    const { chartData } = props;

    // keeps both players in sync whenever either one's volume is changed
    const handleVolumeChanged = (event) => {
        setVolume(event.target.volume);
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            const audio1 = audioPlayerRef1.current && audioPlayerRef1.current.audioEl.current;
            const audio2 = audioPlayerRef2.current && audioPlayerRef2.current.audioEl.current;

            if (audio1 && Number.isFinite(audio1.duration) && audio1.duration > 0) {
                audio1.currentTime = Math.random() * audio1.duration;
            }

            if (audio2 && Number.isFinite(audio2.duration) && audio2.duration > 0) {
                audio2.currentTime = Math.random() * audio2.duration;
            }
        }, 2500);

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
                            ref={audioPlayerRef1}
                            id="apexChartAudioPlayer1"
                            src={apexChartSound}
                            volume={volume}
                            onVolumeChanged={handleVolumeChanged}
                            loop
                            controls
                            style={soundStyles}
                        />
                        <ReactAudioPlayer
                            ref={audioPlayerRef2}
                            id="apexChartAudioPlayer2"
                            src={apexChartSound}
                            volume={volume}
                            onVolumeChanged={handleVolumeChanged}
                            loop
                            controls
                            style={soundStyles}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ApexChartCard;

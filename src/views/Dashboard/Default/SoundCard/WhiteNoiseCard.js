import React, { useEffect, } from 'react';
import { useTheme } from '@material-ui/styles';
import Chart from 'react-apexcharts';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ReactAudioPlayer from 'react-audio-player';
import { randomIntFromInterval, } from '../../../Utils/Functions';
import { randomTimeIntervalMilliseconds, } from '../../../Utils/Constants';

import { Box, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';

import WhiteNoiseSound from '../../../../assets/audio/Construction-Site-Sound-Effects-8-HOURS-with-Video-Hammering-Hand-Sawing-Wood-Drilling-etc-128-kbps.mp3';

const useStyles = makeStyles((theme) => ({
    content: {
        padding: 0,
        paddingBottom: '0px !important',
    },
}));

const soundStyles = {
    width: '100%',
};

const whiteNoiseVolume = 0.10;

const whiteNoiseStartTimeInMinutes = 0;

// This is the length of the audio in minutes.
const whiteNoiseEndTimeInMinutes = (60 * 8) + 4; // 8 hours plus 4 minutes

const WhiteNoiseCard = (props) => {
    useEffect(() => {
        const fAPlayer1 = document.getElementById("whiteNoiseAudioPlayer1");
        fAPlayer1.currentTime = Math.floor(
            randomIntFromInterval(
                whiteNoiseStartTimeInMinutes * 60,
                whiteNoiseEndTimeInMinutes * 60,
            )
        );
        const fAPlayer2 = document.getElementById("whiteNoiseAudioPlayer2");
        fAPlayer2.currentTime = Math.floor(
            randomIntFromInterval(
                whiteNoiseStartTimeInMinutes * 60,
                whiteNoiseEndTimeInMinutes * 60,
            )
        );
        const fAPlayer3 = document.getElementById("whiteNoiseAudioPlayer3");
        fAPlayer3.currentTime = Math.floor(
            randomIntFromInterval(
                whiteNoiseStartTimeInMinutes * 60,
                whiteNoiseEndTimeInMinutes * 60,
            )
        );
        const fAPlayer4 = document.getElementById("whiteNoiseAudioPlayer4");
        fAPlayer4.currentTime = Math.floor(
            randomIntFromInterval(
                whiteNoiseStartTimeInMinutes * 60,
                whiteNoiseEndTimeInMinutes * 60,
            )
        );
        const fAPlayer5 = document.getElementById("whiteNoiseAudioPlayer5");
        fAPlayer5.currentTime = Math.floor(
            randomIntFromInterval(
                whiteNoiseStartTimeInMinutes * 60,
                whiteNoiseEndTimeInMinutes * 60,
            )
        );
        const interval = setInterval(() => {
            fAPlayer1.currentTime = Math.floor(
                randomIntFromInterval(
                    whiteNoiseStartTimeInMinutes * 60,
                    whiteNoiseEndTimeInMinutes * 60,
                )
            );
            fAPlayer2.currentTime = Math.floor(
                randomIntFromInterval(
                    whiteNoiseStartTimeInMinutes * 60,
                    whiteNoiseEndTimeInMinutes * 60,
                )
            );
            fAPlayer3.currentTime = Math.floor(
                randomIntFromInterval(
                    whiteNoiseStartTimeInMinutes * 60,
                    whiteNoiseEndTimeInMinutes * 60,
                )
            );
            fAPlayer4.currentTime = Math.floor(
                randomIntFromInterval(
                    whiteNoiseStartTimeInMinutes * 60,
                    whiteNoiseEndTimeInMinutes * 60,
                )
            );
            fAPlayer5.currentTime = Math.floor(
                randomIntFromInterval(
                    whiteNoiseStartTimeInMinutes * 60,
                    whiteNoiseEndTimeInMinutes * 60,
                )
            );
        }, randomTimeIntervalMilliseconds);
        return () => clearInterval(interval);
    }, []);

    const classes = useStyles();
    const theme = useTheme();

    const { bgColor, chartData, } = props;

    const icon = <EqualizerIcon />

    return (
        <Card>
            <CardContent className={classes.content}>
                <Box color="#fff" bgcolor={bgColor ? bgColor : theme.palette.primary.main} p={3}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant="subtitle1" color="inherit">
                                    Construction Site Sound Effects - 8 HOURS - with Video. Hammering,
                                    Hand Sawing Wood, Drilling etc <i>(128 kbps)</i>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Grid container alignItems="center">
                                  <Box component="span" mr={2}>
                                      {icon}
                                  </Box>
                                  <Typography variant="subtitle1" color="inherit">
                                      100%
                                  </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        {chartData && (
                            <Grid item>
                                <Chart {...chartData} />
                            </Grid>
                        )}
                    </Grid>
                </Box>
                <ReactAudioPlayer
                    id="whiteNoiseAudioPlayer1"
                    src={WhiteNoiseSound}
                    loop
                    controls
                    style={soundStyles}
                    volume={whiteNoiseVolume}
                />
                <ReactAudioPlayer
                    id="whiteNoiseAudioPlayer2"
                    src={WhiteNoiseSound}
                    loop
                    controls
                    style={soundStyles}
                    volume={whiteNoiseVolume}
                />
                <ReactAudioPlayer
                    id="whiteNoiseAudioPlayer3"
                    src={WhiteNoiseSound}
                    loop
                    controls
                    style={soundStyles}
                    volume={whiteNoiseVolume}
                />
                <ReactAudioPlayer
                    id="whiteNoiseAudioPlayer4"
                    src={WhiteNoiseSound}
                    loop
                    controls
                    style={soundStyles}
                    volume={whiteNoiseVolume}
                />
                <ReactAudioPlayer
                    id="whiteNoiseAudioPlayer5"
                    src={WhiteNoiseSound}
                    loop
                    controls
                    style={soundStyles}
                    volume={whiteNoiseVolume}
                />
            </CardContent>
        </Card>
    );
};

export default WhiteNoiseCard;

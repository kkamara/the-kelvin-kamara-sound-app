import React, { useEffect, } from 'react';
import { useTheme } from '@material-ui/styles';
import Chart from 'react-apexcharts';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ReactAudioPlayer from 'react-audio-player';

import { Box, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';

// import WhiteNoiseSound from '../../../../assets/audio/10-Hours-of-People-Talking-Ambience-White-Noise-256-kbps.mp3';

const useStyles = makeStyles((theme) => ({
    content: {
        padding: 0,
        paddingBottom: '0px !important',
    },
}));

const soundStyles = {
    width: '100%',
};

const WhiteNoiseCard = (props) => {
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
                                    {/* Deep Techno 24/7 🔴 Live Stream */}
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
                {/* <iframe
                    width="400"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/G-u5OhIeln4?si=MWt_z2dajsNGxnkD"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe> */}
            </CardContent>
        </Card>
    );
};

export default WhiteNoiseCard;

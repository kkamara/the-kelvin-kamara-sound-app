import React, { useEffect, } from 'react';
import { useTheme } from '@material-ui/styles';
import Chart from 'react-apexcharts';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ReactAudioPlayer from 'react-audio-player';

import { Box, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';

import whiteNoiseSound from '../../../../assets/audio/AMSR-Sick-Person-Sounds-Sneezing,-Coughing,-and-Sniffling-for-Relaxation-320-kbps.m4a';

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
                                    ASMR: Sick Person Sounds Sneezing, Coughing,
                                    and Sniffling for Relaxation <i>(320 kbps)</i>
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
                    src={whiteNoiseSound}
                    loop
                    controls
                    style={soundStyles}
                    volume={0.39}
                />
            </CardContent>
        </Card>
    );
};

export default WhiteNoiseCard;

import React from 'react';
import { useTheme } from '@material-ui/styles';
import Chart from 'react-apexcharts';
import EqualizerIcon from '@material-ui/icons/Equalizer';

import whiteNoiseSound from '../../../../assets/audio/Sweeping-High-Frequency-Noise-Ten-Hours-10-Tinnitus-Relief-ASMR-320-kbps.weba';

const useStyles = makeStyles((theme) => ({
    content: {
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

    const icon = <EqualizerIcon />;

    return (
        <Card>
            <CardContent className={classes.content}>
                <Box color="#fff" bgcolor={bgColor ? bgColor : theme.palette.primary.main} p={3}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant="subtitle1" color="inherit">
                                    Sweeping High Frequency Noise Ten Hours
                                    10 - Tinnitus Relief - ASMR <i>(320 kbps)</i>
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
                    id="whiteNoiseAudioPlayer"
                    src={whiteNoiseSound}
                    loop
                    controls
                    style={soundStyles}
                />
            </CardContent>
        </Card>
    );
};

export default WhiteNoiseCard;

import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography } from '@material-ui/core';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';

import smoothRadioImage from "../../../../assets/images/radios/smoothradio.png";

const useStyles = makeStyles((theme) => ({
    secondary: {
        marginTop: '.5rem',
    },
    footer: {
        textAlign: 'center',
        padding: theme.spacing(1.2),
        paddingLeft: '20px',
        paddingRight: '20px',
        color: theme.palette.common.white,
    },
}));

const soundStyles = {
    width: '300px',
};

const MusicRadioSoundCard2 = (props) => {
    const { color, } = props;
    const classes = useStyles();

    const primaryIcon = <GraphicEqIcon fontSize="large" />;

    const footerIcon = <EqualizerIcon fontSize="large" />;

    return (
        <Card>
            <CardContent>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="h3" style={{ color: color }}>
                            Music Radio Sound
                        </Typography>
                        <Typography variant="subtitle1" className={classes.secondary}>
                            Music radios
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h2" style={{ color: color }}>
                            {primaryIcon}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <a 
                            target="_blank"
                            className="js-popupPlayer smoothRadioAudioPlayer" 
                            href="https://ukradiolive.com/smooth-radio#server652" 
                            title="Start online radio!"
                        >
                            <img 
                                width="94px"
                                src={smoothRadioImage} 
                                title="Start online radio!" 
                                alt="Start online radio!"
                            />
                        </a>
                    </Grid>
                </Grid>
            </CardContent>
            <div style={{ background: color }}>
                <Grid container justifyContent="space-between" className={classes.footer}>
                    <Grid item>
                        <Typography variant="body2">What are they tryna tell ya?</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2">{footerIcon}</Typography>
                    </Grid>
                </Grid>
            </div>
        </Card>
    );
};

export default MusicRadioSoundCard2;

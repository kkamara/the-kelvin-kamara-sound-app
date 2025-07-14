import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography } from '@material-ui/core';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import ReactAudioPlayer from 'react-audio-player';

import MusicSound from '../../../../assets/audio/Deep-Focus-Music-For-Studying-Concentration-and-Work-320-kbps.mp3'

const musicSoundVolume = 0.40;

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

const MusicCard = (props) => {
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
                            Music Sound
                        </Typography>
                        <Typography variant="subtitle1" className={classes.secondary}>
                            Deep Focus - Music For Studying, Concentration
                            and Work <i>(320 kbps)</i>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h2" style={{ color: color }}>
                            {primaryIcon}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <ReactAudioPlayer
                            src={MusicSound}
                            loop
                            controls
                            style={soundStyles}
                            volume={musicSoundVolume}
                        />
                    </Grid>
                </Grid>
            </CardContent>
            <div style={{ background: color }}>
                <Grid container justifyContent="space-between" className={classes.footer}>
                    <Grid item>
                        <Typography variant="body2">Erm...</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2">{footerIcon}</Typography>
                    </Grid>
                </Grid>
            </div>
        </Card>
    );
};

export default MusicCard;

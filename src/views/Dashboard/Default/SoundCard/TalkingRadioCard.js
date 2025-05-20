import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography } from '@material-ui/core';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import RadioIcon from '@material-ui/icons/Radio';

import timesRadioImage from "../../../../assets/images/radios/timesradio.png";
import lbcRadioImage from "../../../../assets/images/radios/lbc.png";

import "./TalkingRadioCard.scss";

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

const TalkingRadioCard = (props) => {
    const { color, } = props;
    const classes = useStyles();

    const primaryIcon = <RadioIcon fontSize="large" />;

    const footerIcon = <EqualizerIcon fontSize="large" />;

    return (
        <Card>
            <CardContent>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="h3" style={{ color: color }}>
                            Talking Radio Sound
                        </Typography>
                        <Typography variant="subtitle1" className={classes.secondary}>
                            Talking radios
                        </Typography>
                    </Grid>
                    <Grid item>
                        <a 
                            target="_blank"
                            className="js-popupPlayer timesAudioPlayer" 
                            href="https://ukradiolive.com/times-radio#server888" 
                            title="Start online radio!"
                        >
                            <img 
                                width="100"
                                src={timesRadioImage}
                                title="Start online radio!" 
                                alt="Start online radio!"
                            />
                        </a>
                        <a 
                            target="_blank"
                            className="js-popupPlayer lbcAudioPlayer" 
                            href="https://ukradiolive.com/lbc-97-3#server359" 
                            title="Start online radio!"
                        >
                            <img 
                                width="100"
                                src={lbcRadioImage}
                                title="Start online radio!" 
                                alt="Start online radio!"
                            />
                        </a>
                    </Grid>
                    <Grid item>
                        <Typography variant="h2" style={{ color: color }}>
                            {primaryIcon}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <div style={{ background: color }}>
                <Grid container justifyContent="space-between" className={classes.footer}>
                    <Grid item>
                        <Typography variant="body2">We can do it and it's not just do it</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2">{footerIcon}</Typography>
                    </Grid>
                </Grid>
            </div>
        </Card>
    );
};

export default TalkingRadioCard;

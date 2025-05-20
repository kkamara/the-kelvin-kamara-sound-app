import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography } from '@material-ui/core';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import RadioIcon from '@material-ui/icons/Radio';

import classicRadioImage from "../../../../assets/images/radios/classic.png";
import capitalRadioImage from "../../../../assets/images/radios/capital.png";
import bbc1RadioImage from "../../../../assets/images/radios/bbcradio1.jpg";

import "./MusicRadioCard.scss";

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

const MusicRadioCard = (props) => {
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
                            Music Radio Sound
                        </Typography>
                        <Typography variant="subtitle1" className={classes.secondary}>
                            Music radios
                        </Typography>
                    </Grid>
                    <Grid item>
                        <a 
                            target="_blank"
                            className="js-popupPlayer classicRockAudioPlayer" 
                            href="https://ukradiolive.com/classic-fm#server342" 
                            title="Start online radio!"
                        >
                            <img 
                                width="100"
                                src={classicRadioImage}
                                title="Start online radio!" 
                                alt="Start online radio!"
                            />
                        </a>
                        <a 
                            target="_blank"
                            className="js-popupPlayer capitalAudioPlayer" 
                            href="https://ukradiolive.com/capital-fm#server353" 
                            title="Start online radio!"
                        >
                            <img 
                                width="100"
                                src={capitalRadioImage}
                                title="Start online radio!" 
                                alt="Start online radio!"
                            />
                        </a>
                        <a 
                            target="_blank"
                            className="js-popupPlayer bbc1AudioPlayer" 
                            href="https://ukradiolive.com/bbc-radio-1#server727" 
                            title="Start online radio!"
                        >
                            <img 
                                width="100"
                                src={bbc1RadioImage} 
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

export default MusicRadioCard;

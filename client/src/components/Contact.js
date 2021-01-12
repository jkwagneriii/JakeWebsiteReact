import React from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import {
TextField, 
Typography,  
Grid, 
Box, 
Card, 
CardMedia, 
CardActionArea } from '@material-ui/core'
import Typed from "react-typed"
import Navbar from './Navbar'
import Footer from './Footer'
import resume from '../images/PrettyResume.png'
import Particles from 'react-particles-js'

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#758877"
        },
        "& label": { 
            color: "#efd5b6"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#efd5b6"
            },
            "&:hover fieldset": {
                borderColor: "#efd5b6"
            },
            "&.Mui-focused fieldset": {
                borderColor: "#efd5b6"
            }
        }
    },
})(TextField);

const useStyles = makeStyles(theme=>({
    resume: {
        height: "500px",
        width: "auto"
    },
    heading: {
        color: "#273b49",
        textAlign: "center",
        textTransform: "uppercase",
        background: "#758877",
        padding: "6px",
        borderStyle: "none",
        fontWeight: "bold"
    },
    mainContainer: {
        margin: "4rem",
    },
    particlesCanvas: {
        position: 'absolute',
        align: 'center',
        opacity: 0.5
    }
}));

const Contact = () => {
    const classes = useStyles()
    return (
        <>
            <Box component="div">
                <Navbar />
                <Particles
                    canvasClassName={classes.particlesCanvas}
                    params={{
                        particles: {
                            number: {
                                value: 45,
                                density: {
                                    enable: true,
                                    value_area: 900
                                }
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 1,
                                    color: "#b2af97"
                                }
                            },
                            size: {
                                value: 8,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 5,
                                    size_min: 0.1,
                                    sync: true
                                }
                            },
                            opacity: {
                                value: 1,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: true
                                }
                            }
                        }
                    }}
                />
                <Grid container justify="center">
                    <Box component="div" className={classes.mainContainer}>
                        <Grid item xs={12} sm={12} md={12}>
                            <Card>
                                <CardActionArea>
                                    <Typography className={classes.heading} variant="h5">
                                        <Typed strings={["GET IN TOUCH"]} typeSpeed={80} />
                                    </Typography>
                                    <CardMedia
                                        className={classes.resume}
                                        component="img"
                                        height="auto"
                                        image={resume}
                                        title="Resume"
                                    />
                                </CardActionArea>
                                <Footer />
                            </Card>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default Contact

import React from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import {TextField, Typography, Button, Grid, Box, Card, CardMedia, CardActionArea } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import Navbar from './Navbar'
import resume from '../images/attemptResume.png'

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
        
    }
}));

const Contact = () => {
    const classes = useStyles()
    return (
        <>
            <Box component="div">
                <Grid container justify="center">
                    <Box component="form">
                        <Typography variant="h5">
                            Get in touch!
                        </Typography>
                        <Card>
                            <CardActionArea>
                            <CardMedia 
                            className={classes.resume}
                            component="img"
                            height="auto"
                            image={resume}
                            title="Resume"
                            />
                            </CardActionArea>
                        </Card>
                        <InputField 
                        fullWidth={true}
                        label="Uh"
                        variant="outlined"
                        />
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default Contact

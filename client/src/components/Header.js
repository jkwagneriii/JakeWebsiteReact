import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
Typography,
Avatar,
Grid,
Box
} from "@material-ui/core"
import Typed from "react-typed"
import avatar from '../images/avatar.png'

// CSS STYLES
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: theme.spacing(1),
    },
    title: {
        color: "#273b49",
        fontFamily: "Arial"
    },
    subtitle: {
        color: "#273b49",
        marginBottom: "3rem",
        fontFamily: "Arial"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))


const Header = () => {
    const classes = useStyles()
    return (
    <>
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Jake Wagner" />
            </Grid>
            <Typography 
            className={classes.title}
            variant="h4">
                <Typed strings={["Jake Wagner"]} typeSpeed={80}/>
            </Typography>
            <br/>
            <Typography 
            className={classes.subtitle}
            variant="h5">
                <Typed 
                strings={
                    ["Full-Stack Web Development", "JavaScript", "React", "JQuery", "MongoDB", "Express", "HTML5", "CSS3", "Bootstrap", "Material-UI"]
                } 
                typeSpeed={40}
                backSpeed={60}
                loop/>
            </Typography>
        </Box>
    </>    
    )
}

export default Header

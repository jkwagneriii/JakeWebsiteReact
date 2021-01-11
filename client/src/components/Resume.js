import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Typography,Box} from '@material-ui/core'
import Navbar from './Navbar'

const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: "#b2af97",
        opacity: "0.75"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid #efd5b6",
            right: "40px",
            top: 0 
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid #efd5b6",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "#273b49 #273b49 transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "##efd5b6"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #273b49 #273b49"
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "#273b49",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none",
            },
        }
    },
    heading: {
        color: "#273b49",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}))

const Resume = () => {
    const classes = useStyles()
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Working Experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2021 - Present
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Full-Stack Web Development Tutor
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: '#273b49'}}>
                            Trilogy Education
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: 'white'}}>
                        Helping Full-Stack Web Development students gain insight, knowledge and confidence in a 1:1 setting.
                        As tutors, we advise success strategies in the boot camp, and beyond. Tutors are responsible for managing students, sessions, schedules, and all communication with students and Central Support.
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2018-2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Drink Developer/Shift Lead
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: '#273b49'}}>
                            Intelligentsia Coffee
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: 'white'}}>
                             Designed original seasonal beverages for Intelligentsia’s menu nationwide. Managed store operations and increased seasonal revenue. Created cocktail menus for special events and VIP clients.
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2017-2018
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Drink Maker
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: '#273b49'}}>
                            The Aviary
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: 'white'}}>
                            Thrived in a fast paced, hyper focused, physically and mentally demanding workplace. Received a crash course in service of the highest quality and true attention to detail. Delivered excellent service to high end clientele. 
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2015-2017
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Shipping Manager
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: '#273b49'}}>
                            United Group Printing
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: 'white'}}>
                            Ran the shipping department for three consecutive summers. Handled all the deliveries as well as received all new products. Maintained the warehouse and kept it clean and orderly. 
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Resume

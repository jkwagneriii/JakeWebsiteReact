import React from 'react'
import { makeStyles } from '@material-ui/styles'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: "auto"
        }
    }
})

const Footer = () => {
    const classes = useStyles()
    return (
        <BottomNavigation width="auto" style={{background: "#758877"}}>
            <BottomNavigationAction
            className={classes.root}
            style={{padding: 0}}
            icon={<GitHubIcon/>}
            />
            <BottomNavigationAction
            className={classes.root}
            style={{padding: 0}}
            icon={<EmailIcon/>}
            />
            <BottomNavigationAction
            className={classes.root}
            style={{padding: 0}}
            icon={<LinkedInIcon/>}
            />
        </BottomNavigation>
    )
}

export default Footer

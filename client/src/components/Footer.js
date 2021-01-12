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
        },
        "& .MuiSvgIcon-root": {
            fill: "#273b49",
            "&:hover": {
                fill: "#efd5b6",
                fontSize: "1.8rem"
            }
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
            href="https://github.com/jkwagneriii"
            target="_blank"
            />
            <BottomNavigationAction
            className={classes.root}
            style={{padding: 0}}
            icon={<EmailIcon/>}
            href="mailto:jkwagneriii@gmail.com"
            />
            <BottomNavigationAction
            className={classes.root}
            style={{padding: 0}}
            icon={<LinkedInIcon/>}
            href="https://www.linkedin.com/in/jake-wagner-iii/"
            target="_blank"
            />
        </BottomNavigation>
    )
}

export default Footer

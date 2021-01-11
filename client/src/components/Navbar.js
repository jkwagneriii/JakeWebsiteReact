import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import {
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemText,
ListItemIcon,
Avatar,
Divider,
List,
Typography,
Box    
} from '@material-ui/core'
import {
ArrowBack,
AssignmentInd,
Home,
Apps,
ContactMail    
} from '@material-ui/icons'
import avatar from '../images/avatar.png'

// CSS STYLING
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#758877",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "#273b49"
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: "/contact"
    },
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open})
    }
    const classes = useStyles()

    const sideList = slider => (
        <Box 
        className={classes.menuSliderContainer} 
        component="div"
        onClick={toggleSlider(slider, false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt="Jake Wagner" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key)=>(
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className={classes.listItem}>
                        {lsItem.listIcon}
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background: '#758877'}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <ArrowBack style={{color: '#efd5b6'}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: '#efd5b6'}}>
                        Portfolio
                    </Typography>
                    <MobileRightMenuSlider
                    anchor="right"
                    open={state.right}
                    onClose={toggleSlider("right", false)}
                    >
                        {sideList("right")}
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar

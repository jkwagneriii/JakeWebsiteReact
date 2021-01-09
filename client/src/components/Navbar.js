import React from 'react'
import {
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemText,
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

const Navbar = () => {
    return (
        <Box component="nav">
            <AppBar position="static" style={{background: '#FFAFE0'}}>
                <Toolbar>
                    <IconButton>
                        <ArrowBack style={{color: '#ADFFB1'}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: '#ADFFE8'}}>
                        Portfolio
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar

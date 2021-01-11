import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
Box,
Grid,
Card,
CardActionArea,
CardActions,
CardContent,
CardMedia,
Button,
Typography
} from '@material-ui/core'
import Navbar from './Navbar'
// import project1 from '../images/Smug_landing.png'
import project2 from '../images/VV_readme_screenshot.png'

const useStyles = makeStyles({
    mainContainer: {
        // background: "#b2af97",
        height: "100%"
    },
    cardContainer: {
        maxwidth: 345,
        padding: "3rem",
        margin: "5rem auto"
    }
})

const Portfolio = () => {
    const classes = useStyles()
    const project1 = "https://giphy.com/embed/7D3CFhXBdpJoiQ58hG"
    const project2 = "https://giphy.com/embed/QQLOmrJI75wfHPm3Gs"
    
    return (
        <>
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={8} md={6}>
                    {/* Project 1  */}
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                            frameBorder="0"
                            component="iframe"
                            alt="Project 1"
                            image={project1} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography variant="body2" color="red" component="p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus perferendis, autem veritatis eius laborum unde ab veniam sed sapiente dignissimos expedita corporis numquam odio consectetur laudantium? Libero, provident consequatur!
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="#758877">
                                    Share
                                </Button>
                                <Button size="small" color="#273b49">
                                    Live Demo
                                </Button>
                            </CardActions>    
                        </CardActionArea>
                    </Card>
                    {/* Project 2  */}
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                            frameBorder="0"
                            component="iframe"
                            alt="Project 2"
                            image={project2} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 2
                                </Typography>
                                <Typography variant="body2" color="red" component="p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus perferendis, autem veritatis eius laborum unde ab veniam sed sapiente dignissimos expedita corporis numquam odio consectetur laudantium? Libero, provident consequatur!
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="#758877">
                                    Share
                                </Button>
                                <Button size="small" color="#273b49">
                                    Live Demo
                                </Button>
                            </CardActions>    
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default Portfolio

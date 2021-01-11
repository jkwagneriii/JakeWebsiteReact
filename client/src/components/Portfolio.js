import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
Box,
Divider,
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
        maxwidth: 300,
        padding: "3rem",
        margin: "5rem 1rem",
        background: "#efd5b6"
    },
    title: {
        textDecoration: "underline"
    }
})

const Portfolio = () => {
    const classes = useStyles()
    // GIPHS 
    const project1 = "https://giphy.com/embed/7D3CFhXBdpJoiQ58hG"
    const project2 = "https://giphy.com/embed/QQLOmrJI75wfHPm3Gs"
    const project3 = "https://giphy.com/embed/CveFhs9z9l5bsNmH6O"
    const project4 = "https://giphy.com/embed/WjVp4SzxmNLzV1l3ax"

    // BUTTON LINKS 
    const smugLiveLink = "https://still-sands-13571.herokuapp.com/"
    const smugGitLink = "https://github.com/jyocus/Smug-Sheep"
    const vegLiveLink = "https://dry-oasis-44384.herokuapp.com/"
    const vegGitLink = "https://github.com/aeesley/veggie-vision"
    const dogLiveLink = "https://jkwagneriii.github.io/Project_1_DogsDog/"
    const dogGitLink = "https://github.com/jkwagneriii/Project_1_DogsDog"
    const foodLiveLink = "https://quiet-atoll-74462.herokuapp.com/"
    const foodGitLink = "https://github.com/jkwagneriii/React_Recipes"

   
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
                                <Typography className={classes.title} gutterBottom variant="h5">
                                    Smug Sheep
                                </Typography>
                                <Typography variant="body2" color="red" component="p">
                                Often, focusing on the negative is easier than focusing on the positive. Because of that, the team at Smug Sheep wanted to provide a space to share the good in your life, no matter how big or small, in a safe anonymous environment. So hop on over the the Smug Sheep feed, join the flock, and start shearing that negativity away one kind story at a time.
                                </Typography>
                                <Divider />
                                <Typography variant="caption">
                                This application uses React, JavaScript, Material UI, MongoDB, Node, Express, Particles, and Auth0
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button target="_blank" rel="noopener" href={smugGitLink} size="small" color="#758877">
                                    GitHub Repository
                                </Button>
                                <Button target="_blank" rel="noopener" href={smugLiveLink} size="small" color="#273b49">
                                    Live Demo
                                </Button>
                            </CardActions>    
                    </Card>
                </Grid>    
                    {/* Project 2  */}
                <Grid item xs={12} sm={8} md={6}>    
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                            frameBorder="0"
                            component="iframe"
                            alt="Project 2"
                            image={project2} />
                            <CardContent>
                            <Typography className={classes.title} gutterBottom variant="h5">
                                    Veggie Vision
                                </Typography>
                                <Typography variant="body2" color="red" component="p">
                                Here at Veggie Vision, we understand it can be difficult to know what to do with all those wild
                                vegetables out there. I mean what is a beet, right? That’s why we have created an application to
                                help you find the perfect veggies for you. Whether you are working on a an iron deficiency or just
                                trying to get your kids to eat more greens, Veggie Vision has your back!
                                </Typography>
                                <Divider />
                                <Typography variant="caption">
                                This application uses Handlebars, JavaScript, Jquery, MySQL, Node, and Bootstrap
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button target="_blank" rel="noopener" href={vegGitLink} size="small" color="#758877">
                                    GitHub Repository
                                </Button>
                                <Button target="_blank" rel="noopener" href={vegLiveLink} size="small" color="#273b49">
                                    Live Demo
                                </Button>
                            </CardActions>    
                    </Card>
                </Grid>    
                    {/* Project 3  */}
                <Grid item xs={12} sm={8} md={6}>    
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                            frameBorder="0"
                            component="iframe"
                            alt="Project 2"
                            image={project3} />
                            <CardContent>
                            <Typography className={classes.title} gutterBottom variant="h5">
                                    What's Your Dog, Dog?
                                </Typography>
                                <Typography variant="body2" color="red" component="p">
                                Here at What's Your Dog, Dog? We are committed to matching you up with your new best friend! We
                                understand that dogs, just like people, have a wide range of personalities. So, scroll down and
                                begin your search for a new buddy!
                                </Typography>
                                <Divider />
                                <Typography variant="caption">
                                This application uses HTML5, PureCSS, and REST API
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button target="_blank" rel="noopener" href={dogGitLink} size="small" color="#758877">
                                    GitHub Repository
                                </Button>
                                <Button target="_blank" rel="noopener" href={dogLiveLink} size="small" color="#273b49">
                                    Live Demo
                                </Button>
                            </CardActions>    
                    </Card>
                </Grid>    
                    {/* Project 4  */}
                <Grid item xs={12} sm={8} md={6}>    
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                            frameBorder="0"
                            component="iframe"
                            alt="Project 2"
                            image={project4} />
                            <CardContent>
                            <Typography className={classes.title} gutterBottom variant="h5">
                                    React Recipes
                                </Typography>
                                <Typography variant="body2" color="red" component="p">
                                This is a simple web application for finding food recipes. Once the application loads, type in an ingredient and press search. You will see 10 recipes that have images, links, and ingredient information. Find something you like and get ready to chow down.
                                </Typography>
                                <Divider />
                                <Typography variant="caption">
                                This application uses React, UUID, and Particles
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button target="_blank" rel="noopener" href={foodGitLink} size="small" color="#758877">
                                    GitHub Repository
                                </Button>
                                <Button target="_blank" rel="noopener" href={foodLiveLink} size="small" color="#273b49">
                                    Live Demo
                                </Button>
                            </CardActions>    
                    </Card>  
                </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default Portfolio

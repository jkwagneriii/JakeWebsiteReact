import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    particlesCanvas: {
        position: 'absolute',
    }
})

const Home = () => {

    const classes = useStyles()

    return (
        <>
            <Navbar />
            <Header />
            <Particles 
                canvasClassName={classes.particlesCanvas}
                params={{
                    particles: {
                        number: {
                            value: 45
                        }
                    }
                }}
            />
        </>
    )
}

export default Home

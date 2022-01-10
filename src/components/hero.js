import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Container from '@mui/material/Container';

import * as styles from './hero.module.css'

const Hero = () => {
    return(
        <div className={styles.hero}>
            <Container>
            <p>
                Aloha, my name is Jay
            </p>
            </Container>
        </div>
    );
}

export default Hero;

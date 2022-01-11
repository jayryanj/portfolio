import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from '@mui/material';

import * as styles from './hero.module.css'

const Hero = () => {
    return(
        <div className={styles.hero}>
            <Container>

                <StaticImage className={styles.picture} src="../images/portrait_small.jpg" alt="portrait" width={200}/>

                <div className={styles.divider}></div>

                <h1 className={styles.aloha}>
                    Aloha, I'm Jay.
                </h1>

                <p className={styles.description}>
                    I'm a Software Engineer from Hawai'i.
                </p>

                <div className={styles.divider}></div>

            </Container>
        </div>
    );
}

export default Hero;

import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import * as styles from '../styles/hero.module.css'

const Hero = () => {
    return(
        <div data-sal="slide-up" className={styles.hero}>
            <Container>

                <StaticImage className={styles.picture} src="../images/cartoon_portrait_new.png" alt="Cartoon Portrait"/>

                <div className={styles.divider}></div>

                <h1 className={styles.aloha}>
                    <span className={styles.angleBracket}>&#62;</span> Aloha, I'm Jay.
                </h1>

                <p className={styles.description}>
                    I'm a Software Engineer from Hawai'i.
                </p>

                <div className={styles.divider}></div>

                <Button className={styles.button} variant="contained">
                    <MailOutlineIcon className={styles.mailIcon}/>
                    Contact Me
                </Button>

            </Container>
        </div>
    );
}

export default Hero;

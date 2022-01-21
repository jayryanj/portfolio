import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { Container, Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import * as styles from '../styles/hero.module.css'

const Hero = () => {
    return(
        <div className={styles.hero}>
            <Container>

                <StaticImage className={styles.picture} src="../images/cartoon_portrait_new.png" alt="Cartoon Portrait"/>

                <div data-sal="slide-left" data-sal-delay="1000" className={styles.divider}></div>

                <h1 data-sal="slide-up" className={styles.aloha}>
                    <span className={styles.angleBracket}>&#62;</span> Aloha, I'm Jay.
                </h1>

                <p data-sal="slide-up" data-sal-delay="300" className={styles.description}>
                    I'm a Software Engineer from Hawai'i.
                </p>

                <div data-sal="slide-right" data-sal-delay="1000" className={styles.divider}></div>

                <a data-sal="slide-up" data-sal-delay="600" target="_blank" rel="noreferrer" href="mailto:jayrjamorabon@gmail.com">
                    <Button className={styles.button} variant="contained">
                        <MailOutlineIcon className={styles.mailIcon}/>
                        Contact Me
                    </Button>
                </a>


            </Container>
        </div>
    );
}

export default Hero;

import React from 'react'
import Container from './container'
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'

import { Grid } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import * as styles from '../styles/footer.module.css'

const Footer = () => (
    <div className={styles.footer}>
        <Container as="footer">
            <Grid container>
                <Grid className={styles.topRow} item sm={12} md={12}>
                    <StaticImage className={styles.logo} src="../images/cartoon_portrait_new.png" alt="Jay"/>
                    <p>Play and Learn</p>
                </Grid>
                <Grid item md={6} sm={12}>
                    <p className={styles.text}>
                        Created by Jay &#169; {new Date().getFullYear()}
                    </p>
                </Grid>
                <Grid item md={6} sm={12}>
                    <p>
                        <ul className={styles.social}>
                            <li>
                                Profiles:
                            </li>
                            <li className={styles.socialItem}>
                                <Link target="_blank" to="https://github.com/jayryanj">
                                    <GitHubIcon />
                                </Link>
                            </li>
                            <li className={styles.socialItem}>
                                <Link target="_blank" to="https://www.linkedin.com/in/jayryanjamorabon/">
                                    <LinkedInIcon />
                                </Link>
                                
                            </li>
                        </ul>
                    </p>
                </Grid>
            </Grid>
        </Container>
    </div>

);

export default Footer

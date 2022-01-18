import React from 'react'
import Container from './container'
import { Link } from 'gatsby';

import { Grid } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import * as styles from '../styles/footer.module.css'

const Footer = () => (
    <div className={styles.footer}>
        <Container as="footer">
            <Grid container>
                <Grid item md={6} sm={12}>
                    <p className={styles.text}>
                        Copyright &#169;{new Date().getFullYear()} Jay Ryan Jamorabon
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

)

export default Footer

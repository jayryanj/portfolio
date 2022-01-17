import React from 'react'

import Container from './container'
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
                    <ul className={styles.social}>
                        <li className={styles.socialItem}>
                            <GitHubIcon />
                        </li>
                        <li className={styles.socialItem}>
                            <LinkedInIcon />
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </Container>
    </div>

)

export default Footer

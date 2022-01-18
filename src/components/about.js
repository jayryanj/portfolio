import { Container, Grid } from "@mui/material";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "../styles/about.module.css";
import Layout from "./layout";

const About = () => {
    return(
        <div className={styles.about} id="about">
            <Grid container spacing={2}>
                
                <Grid item md={5} sm={12} xs={12}>
                    <Container>
                        <div className={styles.leftColumn}>
                            <StaticImage className={styles.picture} src="../images/portrait_small.jpg" alt="Jay"/>
                        </div>
                        
                    </Container>
                </Grid>

                <Grid data-sal="slide-up" item md={7} sm={12} xs={12}>
                    <Container>
                        <div className={styles.rightColumn}>
                            <div className={styles.divider}></div>
                            <h2 className={styles.header}>
                                About
                            </h2>
                            <h3 className={styles.name}>
                                Jay Ryan Jamorabon
                            </h3>
                            <div className={styles.description}>
                                <p>
                                    I'm a <strong>software developer</strong> from the islands of <strong>Hawai'i</strong>.
                                </p>
                                <p>
                                    I love to work with technology to build software and solve difficult problems. I'm the happiest at the beach or in front of a computer screen. I'm currently focused on learning web and mobile development.
                                </p>
                                <p>
                                    I recently graduated from the <strong>University of Hawai'i at Mānoa</strong> with a <strong>Bachelor of Science</strong> in <strong>Computer Science</strong>
                                </p>
                            </div>
                        </div>
                    </Container>
                </Grid>

            </Grid>

            <Container>
                My Toolbox:
            </Container>

        </div>
    );
}

/**
 * <Container maxWidth={false} className={styles.container}>
                <p>
                    About Me
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a placerat libero, sit amet gravida augue. Aenean eros enim, laoreet sit amet ex ac, efficitur tincidunt massa. Vestibulum consectetur enim egestas pretium vulputate. Pellentesque mi libero, fringilla ultrices felis id, dapibus aliquet elit. Pellentesque sodales augue id diam finibus aliquet. Etiam auctor, ipsum et egestas ornare, sem turpis viverra erat, et rhoncus augue sapien efficitur odio. Integer ut scelerisque eros. Mauris et nulla lorem. Maecenas vitae consequat lacus. Vivamus non purus nulla. Quisque fermentum sapien non pharetra porttitor. Morbi fringilla, dolor placerat facilisis consectetur, tortor velit placerat leo, eget viverra quam risus tempus sem.
                </p>
            </Container>
 */

export default About;
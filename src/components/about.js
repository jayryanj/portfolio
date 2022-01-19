import { Container, Divider, Grid } from "@mui/material";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "../styles/about.module.css";

const About = () => {
    const tools = [
        "JavaScript",
        "HTML",
        "Java",
        "Python",
        "Spring",
        "Node.js",
        "React",
        "Bootstrap",
        "Gatsby",
        "MongoDB",
        "Headless CMS",
        "Git",
        "GitHub",
        "AEM",
        "VS Code"
    ]

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

                <Grid item md={7} sm={12} xs={12}>
                    <Container>
                        <div className={styles.rightColumn}>
                            <div className={styles.divider}></div>
                            <h2 className={styles.header}>
                                About
                            </h2>
                            <h3 className={styles.name}>
                                Jay Ryan Jamorabon
                            </h3>
                            <div data-sal="slide-up" className={styles.description}>
                                <p>
                                <strong>Aloha! My name is Jay</strong>. I'm a <strong>software developer</strong> and a recent college graduate from the islands of <strong>Hawai'i</strong>.
                                </p>
                                <p>
                                    My interest in coding started in the seventh grade with my very first "Hello, world!" in C. Now, my interest has spiraled into a passion for developing applications and solving problems with technology.
                                </p>
                            </div>
                        </div>
                    </Container>
                </Grid>

            </Grid>

            <Container className={styles.toolsContainer}>
                <Divider>
                    <h2 className={`${styles.header} ${styles.toolsHeader}`}>
                        My Toolbox
                    </h2>
                </Divider>
                <p className={styles.toolsDescription}>
                    Here are a few technologies that I've been working with recently:
                </p>
                <ul className={styles.tools}>
                    {tools.map((tool) => <li className={styles.toolItem}>{tool}</li>)}
                </ul>

            </Container>

        </div>
    );
}

export default About;
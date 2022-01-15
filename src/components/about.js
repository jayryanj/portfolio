import { Container, Grid } from "@mui/material";
import React from "react";

import * as styles from "../styles/about.module.css";
import Layout from "./layout";

const About = () => {
    return(
        <div id="about">
            <Grid container spacing={2}>
                <Grid  item md={8} sm={12} xs={12}>
                    <Container >
                        <h2>
                            About Me
                        </h2>
                    </Container>
                </Grid>
                <Grid  item md={4} sm={12} xs={12}>
                    <Container>
                        <p>
                            Lorem ipsum
                        </p>
                    </Container>
                </Grid>
            </Grid>
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
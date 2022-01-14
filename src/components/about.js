import { Container } from "@mui/material";
import React from "react";

import * as styles from "../styles/about.module.css"

const About = () => {
    return(
        <Container maxWidth={false} className={styles.container}>
            <p>
                About Me
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a placerat libero, sit amet gravida augue. Aenean eros enim, laoreet sit amet ex ac, efficitur tincidunt massa. Vestibulum consectetur enim egestas pretium vulputate. Pellentesque mi libero, fringilla ultrices felis id, dapibus aliquet elit. Pellentesque sodales augue id diam finibus aliquet. Etiam auctor, ipsum et egestas ornare, sem turpis viverra erat, et rhoncus augue sapien efficitur odio. Integer ut scelerisque eros. Mauris et nulla lorem. Maecenas vitae consequat lacus. Vivamus non purus nulla. Quisque fermentum sapien non pharetra porttitor. Morbi fringilla, dolor placerat facilisis consectetur, tortor velit placerat leo, eget viverra quam risus tempus sem.

Praesent nec risus nisl. Vivamus tincidunt felis sit amet pretium gravida. Aenean auctor in tortor nec lobortis. Suspendisse ut suscipit dolor. Morbi nisl nunc, dictum a erat ut, dapibus malesuada felis. Sed ornare fringilla lacus et mattis. Aenean sagittis, orci elementum sodales tincidunt, tortor velit molestie tellus, id faucibus nulla lacus tempor felis. Aliquam quis dolor nisl. Donec lorem lectus, consequat eu diam id, fermentum luctus urna. Donec blandit vitae purus sit amet rhoncus. Phasellus lobortis massa nisl, eu interdum ipsum luctus nec. Cras tristique velit a sem laoreet accumsan. Aenean tempus feugiat orci, id rhoncus magna vehicula ut. In sed ex mollis, gravida tellus quis, imperdiet tellus. Nulla in commodo est, quis posuere mauris. Curabitur finibus mi vel augue malesuada, mollis tincidunt nunc tristique. 
            </p>
        </Container>
    );
}

export default About;
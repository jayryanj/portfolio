import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const Hero = () => {
    return(
        <div className={styles.hero}>
            <p>
                Aloha, my name is Jay
            </p>
        </div>
    );
}

export default Hero;

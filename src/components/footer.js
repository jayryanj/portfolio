import React from 'react'

import Container from './container'
import * as styles from '../styles/footer.module.css'

const Footer = () => (
    <div className={styles.footer}>
        <Container as="footer">
            <p className={styles.text}>
                Copyright &#169;{new Date().getFullYear()} Jay Ryan Jamorabon
            </p>
        </Container>
    </div>

)

export default Footer

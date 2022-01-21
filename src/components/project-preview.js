import React from 'react'
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Button, Card, CardContent, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import * as styles from "../styles/project-preview.module.css"

const ProjectPreview = (props) => {
    const project = props.project;
    const image = getImage()
    console.log(`https:${project.coverImage.file.url}`);

    return(
        <div className={styles.projectPreview}>
            <Grid container spacing={6}>

                <Grid item sm={12} md={7}>
                    <Link to={`/projects/${project.slug}`}>
                        <img className={styles.coverImage} src={`https:${project.coverImage.file.url}`} alt="pic" />
                    </Link>
                </Grid>

                <Grid className={styles.rightColumn} item sm={12} md={5}>

                    <h2 className={styles.name}>
                        <Link to={`/projects/${project.slug}`}>{project.name}</Link>
                    </h2>
                    <p className={styles.summary}>{project.summary.summary}</p>

                    <ul className={styles.tags}>
                        {project.tags.map((tag) => <li className={styles.tagItem}>{tag}</li>)}
                     </ul>

                </Grid>

            </Grid>
        </div>
    );
}

export default ProjectPreview;
/**
                     <Link to={`/projects/${project.slug}`}>
                        <Button className={styles.button} variant="contained">
                            View Details
                        </Button>
                    </Link>
 */
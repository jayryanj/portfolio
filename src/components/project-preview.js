import React from 'react'
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Card, CardContent } from '@mui/material';

import * as styles from "../styles/project-preview.module.css"

const ProjectPreview = (props) => {
    const project = props.project;
    const image = getImage()
    console.log(`https:${project.coverImage.file.url}`);

    return(
        <div className={styles.preview}>
            <Link to={`/projects/${project.slug}`}>
                <img className={styles.coverImage} src={`https:${project.coverImage.file.url}`} alt="pic" />
            </Link>

            <div className={styles.details}>

                <div className={styles.heading}>
                    <h3>Project</h3>
                    <h2>
                        <Link className={styles.headerLink} to={`/projects/${project.slug}`}>
                            {project.name}
                        </Link>
                    </h2>
                    
                </div>

                <Card className={styles.card}>
                    <CardContent>
                        <p>{project.summary.summary}</p>
                    </CardContent>
                </Card>

            </div>

        </div>
    );
}

export default ProjectPreview;
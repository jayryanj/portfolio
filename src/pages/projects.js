import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import { Link } from 'gatsby';
import { Container } from '@mui/material';

import Layout from "../components/layout";
import ProjectPreview from '../components/project-preview';

import * as styles from "../styles/projects.module.css";

const Projects = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allContentfulProject(sort: {fields: date, order: DESC}) {
          nodes {
            name
            slug
            summary {
              summary
            }
            date
            coverImage {
              file {
                url
              }
            }
          }
        }
      }
`)
    return(
        <Layout>
            <Container>
                <h1>Some Things I've worked on</h1>
                <ul className={styles.projectList}>
                    {data.allContentfulProject.nodes.map((project) => 
                        <li className={styles.projectListItem}>
                            <ProjectPreview project={project}/>
                        </li>
                    )}
                </ul>
            </Container>
        </Layout>
    );
}

export default Projects;
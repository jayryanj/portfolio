import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import { Link } from 'gatsby';

import Layout from "../components/layout";

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
        }
        }
    }
`)
    return(
        <Layout>
            <ul>
                {data.allContentfulProject.nodes.map((project) => 
                    <li>
                        <Link to={`/projects/${project.slug}`}>
                            <h2>{project.name}</h2>
                        </Link>
                        <p>{project.summary.summary}</p>
                    </li>
                )}
            </ul>
        </Layout>
    );
}

export default Projects;
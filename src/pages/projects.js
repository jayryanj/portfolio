import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'

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
    console.log(data.allContentfulProject.nodes[0]);
    return(
        <Layout>
            <ul>
                {data.allContentfulProject.nodes.map((project) => 
                    <li>
                        <h2>{project.name}</h2>
                        <p>{project.summary.summary}</p>
                    </li>
                )}
            </ul>
        </Layout>
    );
}

export default Projects;
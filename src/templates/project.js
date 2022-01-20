import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'

const ProjectTemplate = (props) => {
    const project = props.data.contentfulProject
    return(
        <Layout>
            <h1>{project.name}</h1>
            <p>{project.summary.summary}</p>
            <p>{project.objective.objective}</p>
        </Layout>
    );
}

export const query = graphql`
    query ($slug: String!) {
        contentfulProject(slug: {eq: $slug}) {
        name
        slug
        date
        coverImage {
            file {
            url
            }
        }
        summary {
            summary
        }
        objective {
            objective
        }
        results {
            results
        }
        technologies
        links
        media {
            file {
            url
            fileName
            }
        }
        }
    }
`

export default ProjectTemplate;
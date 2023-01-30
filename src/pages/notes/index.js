import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

const NotesOverview = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  slug
                  title
                  course
                  date(formatString: "MMMM DD, YYYY")
                  lecture_nr
                  speaker
                }
              }
            }
          } 
        }
  `)

    return (
        <div>
            <h1>Notes overview</h1>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.frontmatter.slug}>
                    <Link to={node.frontmatter.slug}><h2>{node.frontmatter.title}</h2></Link>
                    <p>{node.frontmatter.date}</p>
                </div>
            ))}
        </div>
    )
}

export default NotesOverview

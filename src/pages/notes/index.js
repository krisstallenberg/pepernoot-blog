import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../../components/layout'

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
                  timestamp
                  lecture_nr
                  speaker
                }
              }
            }
          } 
        }
  `)

  return (
    <Layout>
      <h1>Notes overview</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.frontmatter.slug}>
          <Link to={node.frontmatter.slug}>
            <h3>
              {node.frontmatter.course && node.frontmatter.course + ": "}
              {node.frontmatter.title}
            </h3>
          </Link>
          <p>{node.frontmatter.date ? node.frontmatter.date : new Date(node.frontmatter.timestamp * 1000).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
          })}</p>
        </div>
      ))}
    </Layout>
  )
}

export default NotesOverview

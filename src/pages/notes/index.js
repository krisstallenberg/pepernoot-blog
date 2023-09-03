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
      <h1 className="font-sans font-bold my-8">Notes overview</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={node.frontmatter.slug}>
          <div className="my-7" key={node.frontmatter.slug}>
            <h3 className="font-serif font-medium text-base py-0">
              {node.frontmatter.course && node.frontmatter.course + ": "}
              {node.frontmatter.title}
            </h3>
            <p className="text-slate-400 font-thin text-sm">{node.frontmatter.date ? node.frontmatter.date : new Date(node.frontmatter.timestamp * 1000).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default NotesOverview

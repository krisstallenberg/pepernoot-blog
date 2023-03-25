import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout.js";
import { body, italic, h1, h2, h3, h4, tinyPadding } from './notes.module.css';

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div>
        <h1 classname={tinyPadding}>{frontmatter.title}</h1>
        <h3>{frontmatter.date ? frontmatter.date : new Date(frontmatter.timestamp * 1000).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric"
        })}</h3>
        {frontmatter.speaker && (
          <h4>Taught by: {frontmatter.speaker}</h4>
        )}
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        timestamp
        slug
        title
        speaker
      }
    }
  }
`
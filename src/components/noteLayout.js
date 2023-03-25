import * as React from "react";
import Layout from "/src/components/layout.js";
import { body, italic, h1, h2, h3, h4, tinyPadding } from './note.module.css';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"

const shortcodes = {} // https://www.gatsbyjs.com/docs/how-to/routing/mdx/#make-components-available-globally-as-shortcodes

function NoteLayout({ children, data }) {

    const { frontmatter } = data.mdx

    return (
        <Layout>
            <h1 classname={tinyPadding}>{frontmatter.title}</h1>
            <h3>{frontmatter.date ? frontmatter.date : new Date(frontmatter.timestamp * 1000).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
            })}</h3>
            {frontmatter.speaker && (
                <h4>Taught by: {frontmatter.speaker}</h4>
            )}
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </Layout>
    )
}

export default NoteLayout
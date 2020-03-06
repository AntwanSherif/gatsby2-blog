import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Article from '../components/article';

export default function ArticleList() {
  return (
    <StaticQuery
      query={graphql `
        query {
          allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            totalCount
            edges {
              node {
                fields {
                  slug
                }
                id
                frontmatter {
                  title
                  image
                  date(formatString: "MMMM DD, YYYY")
                  keywords
                }
                excerpt
              }
            }
          }
        }
      `}

      render={data => (
        data.allMarkdownRemark.edges.map(({ node }) => (
          <Article
            key={node.id}
            id={node.id}
            to={node.fields.slug}
            keywords={node.frontmatter.keywords}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          />
        ))
      )}
    />
  )
}

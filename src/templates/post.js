import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../containers/Layout';
import Title from '../components/common/title';
import styles from './post.module.scss';

export default function Post({ data }) {
    const post = data.markdownRemark;

    return (
        <Layout>
            <div className={styles.container}>
                <Title title={post.frontmatter.title} />
                <div style={{ 
                    width: '100%',
                    height: 200,
                    backgroundColor: '#fafafa',
                    backgroundImage: 'Url(https://source.unsplash.com/960x200/?)' + post.frontmatter.keywords
                }}></div>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html}}></div>
            </div>
        </Layout>
    )
}

export const query = graphql `
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                keywords
            }
        }
    }
`;
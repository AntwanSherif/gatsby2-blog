import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Link from './common/Link';
import LinkButton from './common/buttons/LinkButton';
import SocialButton from './common/buttons/SocialButton';
import styles from './header.module.scss';

export default function Header() {
    return (

        <StaticQuery
            query={graphql `
                query {
                    site {
                      siteMetadata {
                        title
                      }
                    }
                }
            `}

            render={data => (
                <header className={styles.container}>
                    <div className={styles.row}>
                        <LinkButton to='/'>{data.site.siteMetadata.title}</LinkButton>

                        <SocialButton site='twitter' username='antwansherif' />
                        <SocialButton site='instagram' username='antwansherif' />
                        <SocialButton site='linkedin' username='antwansherif' />
                    </div>

                    <div className={styles.row}>
                        <Link to='/'>BLOG</Link>
                        {' | '}
                        <Link to='/about'>ARTICLES</Link>
                    </div>
                </header>
            )}
        />


    )
}
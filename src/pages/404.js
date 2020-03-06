import React from 'react';
import { Link } from 'gatsby';
import Layout from '../containers/Layout';
import styles from './404.module.scss';

export default function Page404() {
    return (
        <Layout>
            <div className={styles.content}>
                <h1 className={styles.header}>Page not found</h1>
                <p className={styles.errorMessage}>
                    The page you're looking for does not exist!
                </p>
                <Link to='/'>Home</Link>
            </div>
        </Layout>
    )
}

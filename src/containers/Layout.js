import React from 'react';
import styles from './layout.module.scss';
import Header from '../components/header';
import Footer from '../components/common/footer';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
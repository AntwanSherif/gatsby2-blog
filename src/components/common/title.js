import React from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.scss';

function Title({ title, subtitle }) {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.subtitle}>{subtitle}</div>
        </section>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

export default Title
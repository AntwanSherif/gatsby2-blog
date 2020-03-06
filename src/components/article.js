import React from 'react';
import PropTypes from 'prop-types';
import Link from './common/Link';
import styles from './article.module.scss';

export default function Article({ to, title, date, excerpt, keywords }) {
    return (
        <Link to={to}>
            <article className={styles.articleBox}>
                <div className={styles.left}>
                    <img src={`https://source.unsplash.com/150x150/?${keywords}`} alt={keywords} />
                </div>
                <div className={styles.right}>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.date}>{date}</div>
                    <div>{excerpt}</div>
                </div>
            </article>
        </Link>
    )
}

Article.propTypes = {
    to: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    date: PropTypes.string, 
    excerpt: PropTypes.string.isRequired, 
    keywords: PropTypes.string.isRequired
};
import React from 'react'
import { Link as GatsbyLink } from 'gatsby';
import styles from './link.module.scss';

export default function Link(props) {
    return (
        <GatsbyLink className={styles.link} {...props} />
    )
}

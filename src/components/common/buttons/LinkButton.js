import React from 'react'
import Link from '../Link';
import styles from './button.module.scss';

export default function LinkButton({ to, children }) {
    return (
        <Link to={to}>
            <div className={styles.button}>{children}</div>
        </Link>
    )
}
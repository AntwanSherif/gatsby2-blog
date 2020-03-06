import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

export default function SocialButton({ site, username, children }) {
    let url = '', style = '';

    switch (site) {
        case 'twitter':
            style = styles.buttonTwitter;
            url = `https://twitter.com/${username}`;
            break;

        case 'linkedin':
            style = styles.buttonLinkedin;
            url = `https://www.linkedin.com/in/${username}`;
            break;

        case 'instagram':
            style = styles.buttonInstagram;
            url = `https://www.instagram.com/${username}`;
            break;

        default:
            break;
    }

    if (!url || !style) return null;

    return (
        <a href={url} target='_blank' rel='noopener noreferrer'>
            <div className={style}>{children}&nbsp;</div>
        </a>
    )
}

SocialButton.propTypes = {
    site: PropTypes.oneOf(['twitter', 'instagram', 'linkedin']).isRequired,
    username: PropTypes.string.isRequired,
    children: PropTypes.element,
}
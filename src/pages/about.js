import React from 'react';
import { Link } from 'gatsby';
import Layout from '../containers/Layout';
import Title from '../components/common/title';

export default function about() {
    return (
        <Layout>
            <Title title='About Page' />
            <div>
                <Link to='/'>Home</Link> | <Link to='about'>About me</Link>
            </div>
        </Layout>
    )
}

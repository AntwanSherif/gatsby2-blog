import React from 'react';
import { Link } from 'gatsby';
import Layout from '../containers/Layout';
import Title from '../components/common/title';
import ArticleList from '../containers/ArticleList';

export default function index({ data }) {
    return (
        <Layout>
            <Title title='Welcome' />
            <p>
                <Link to='/'>Home</Link> | <Link to='about'>About me</Link>
            </p>

            <br />
            <br />
            <br />

            <div>
                <ArticleList />
            </div>
        </Layout>
    )
}
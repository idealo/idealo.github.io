import React from 'react';
import './App.scss';

import Navigation from '../Navigation/Navigation'
import Hero from '../Hero/Hero'
import Projects from '../Projects/Projects'
import Jobs from '../Jobs/Jobs'
import Footer from '../Footer/Footer'


export default (props) => {

    return (
        <article className='app__container'>
            <Navigation />
            <Hero />
            <Projects />
            <Jobs />
            <Footer />
        </article>
    );
}
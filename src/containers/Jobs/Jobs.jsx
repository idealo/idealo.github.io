import React, { Component } from 'react';
import './Jobs.scss';

import Gallery from '../../components/Gallery/Gallery'

export default (props) => {

    return (
        <section className='jobs__container' id='jobs'>
            <div className='jobs__headingContainer'>
                <h2 className='sectionHeading jobs__heading'>Jobs</h2>
            </div>
            <Gallery />
            <div className='jobs__advertisement'>
                <p className='jobs__adHeading'>Want to code with us?</p>
                <p className='jobs__adSubheading'>We offer many vacancies in IT!</p>
            </div>
            <a className='jobs__buttonJobs button' href="https://jobs.idealo.com/l/en#section-110677" target="_blank">Find your new job</a>
        </section>
    );
}

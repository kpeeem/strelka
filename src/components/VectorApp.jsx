import React from 'react';

import Hero from './Hero'
import Cards from './Cards'
import Footer from './Footer'

import style from './VectorApp.styl'

/**
 * Head of components
 */

export default class VectorApp extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className={style.section}>
                <Hero {...this.props} /> 
                <Cards {...this.props} />
                <Footer {...this.props} />
            </section>
        )
    }
};

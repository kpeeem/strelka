import React from 'react';
import cl from 'classnames';

import style from './Cards.styl';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.footer}></div>
        )
    }
};
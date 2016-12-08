import React from 'react';
import cl from 'classnames';

import style from './Button.styl'

export default class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: props.text};
    }
    render() {
        const {props} = this;
        const cls = cl([style.button, props.className]);
        return (
            <button onClick={props.onClick && props.onClick()} className={cls}>{props.text}</button>
        )
    }
};
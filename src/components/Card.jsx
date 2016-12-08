import React from 'react';
import cl from 'classnames';
import ReactDOM from 'react-dom';

import style from './Card.styl';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {props} = this;
        let classes = cl([style.main, props.className]);

        return (
           <section className={classes} onMouseOver={props.handleCardHover}>
               {props.num && <div className={style.num}>{props.num}</div>}
               <div className={style.image} style={{backgroundImage: `url(${props.image})`}}/>
               <div className={style.placeholder}>
                   <div className={style.title}>{props.title}</div>
                   <div className={style.description}>{props.description}</div>
               </div>
           </section>
        )
    }
};


Card.defaultProps = {
    num:          1,
    image:       'http://lorempixel.com/720/1200/',
    title:       'Ой ты Коля, Николай',
    description: 'Как Николас Кейдж дошел до жизни такой'
};
Card.propTypes = {
    num: React.PropTypes.number,
    image: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
};
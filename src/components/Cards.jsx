import React from 'react';
import cl from 'classnames';
import Card from './Card';
import Button from './ui/Button';

import style from './Cards.styl';

export default class Cards extends React.Component {

    constructor(props) {
        super(props);
    };
    _showHandle = () => {
        this.setState({
            show: !this.state.show,
            translateX: this.state.show ? 0 : -500
        });
    };
    state = {
        show: false,
        translateX:0
    };

    handleCardsHover = (e) => {
        const rect = e.target.getBoundingClientRect();
        const viewportWidth = (window.innerWidth || document.documentElement.clientWidth);
        if(rect.right > viewportWidth-100){
            this.setState({translateX:this.state.translateX-510})
        }
        if(rect.left < 100){
            this.setState({translateX:this.state.translateX+510})
        }

    };

    render() {
        const {state} = this;
        const styles = {
            transform: `translateX(${state.translateX}px)`
        };
        return (
            <div className={cl(style.cardsWrapper, state.show && style.show)}>
                {state.show && <Button onClick={() => this._showHandle} className={style.close} />}
                <section className={cl(style.cards)} style={styles}>
                    <div className={style.description}>
                        <div className={style.descriptionTitle}>{'Онлайн-курсы'}</div>
                        <div className={style.descriptionText}>{'Наши курсы — практические, они помогают в формировании образа мышления у горожанина, и формировании спроса на городские инициативы'}</div>
                        <Button className={style.button} text='Посмотреть все курсы' onClick={() => this._showHandle} />
                    </div>
                    {[...Array(10).keys()].map((i, idx) => <Card
                        key={idx}
                        className={style.card}
                        handleCardHover={state.show ? this.handleCardsHover : null}
                    />)}

                </section>
                <div className={style.back} />
            </div>
        )
    }
};

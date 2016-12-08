import React from 'react';
import Button from './ui/Button';
import Header from './Header';

import style from './Hero.styl';
import cl from 'classnames';

export default class Hero extends React.Component {
    state = {
        showVideo: false
    };

    _showVideoHandle = () => {
        this.setState({showVideo: !this.state.showVideo});
    };
    render() {
        const {state} = this;
        return (
            <div className={cl(style.hero, state.showVideo && style.show)}>
                {<Button onClick={() => this._showVideoHandle} className={style.close} />}
                <div className={style.video}>
                    {state.showVideo &&
                    <iframe
                        src="https://player.vimeo.com/video/170509497?autoplay=1&loop=1&color=ff9933&title=0&byline=0&portrait=0"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen>
                    </iframe>
                    }
                </div>

                <Header showVideo={state.showVideo} />
                <h2 className={style.title}>Онлайн-школа городских предпринимателей</h2>
                <div className={style.buttonLine}>
                    <Button className={style.start} text="Начать обучение" />
                    <Button className={style.showVideo} text="Посмотреть видео" onClick={() => this._showVideoHandle} />
                </div>
                <div className={style.mousey}>
                    <div className={style.scroller}></div>
                </div>
            </div>
        )
    }
};
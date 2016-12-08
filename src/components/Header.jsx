import React from 'react';
import Menu from './Menu';
import Button from './ui/Button';
import cl from 'classnames';

import style from './Header.styl';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        sticky: false,
        slideUp:false
    };

    componentDidMount(){
        const stickyRelocate = () => {
            var windowTop = document.body.scrollTop;;
            if (windowTop > 10) {
                this.setState({sticky:true});
            }else{
                this.setState({sticky:false});
            }
            if(windowTop > 100) {
                this.setState({slideUp:true});
            }else{
                this.setState({slideUp:false});
            }
        };


        window.addEventListener("scroll", stickyRelocate);
        stickyRelocate();
    };

    componentWillUnmount(){
        window.removeEventListener('scroll', null);
    };

    render() {
        const {state, props} = this;
        const header = cl(style.header, state.sticky && 'headerSticky', (props.showVideo || state.slideUp) && style.slideUp);
        return (
            <header className={header} ref="menu">
                <div className={style.content}>
                    <h1 className={style.logo}>VECTOR</h1>
                    <Menu className={style.menu} />
                    <a href="#" className={style.link}>Войти</a>
                    <Button text='Зарегистрироваться' className={style.signUp} />
                </div>
            </header>
        )
    }
};
import React from 'react';
import style from './Menu.styl';
import cl from 'classnames';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {props} = this;
        return (
            <nav className={cl(style.menu)}>
                {
                    props.menu.map((item, key) => 
                        <a key={key} href={item.href} className={style.link}>{item.title}</a>
                    )
                }
            </nav>
        )
    }
};

Header.defaultProps = {
    menu: [
        {title:'Курсы', href:'#'},
        {title:'Материалы', href:'#'},
        {title:'Проекты', href:'#'},
        {title:'Партнерство', href:'#'},
        {title:'О школе', href:'#'},
    ]
};

Header.propTypes = {
  menu: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}
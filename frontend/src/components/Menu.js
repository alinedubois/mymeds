import React from 'react';

export const Menu = (props) => {
    return (
        <ul className={`${props.mode === 'mobile' ? 'navbar-mobile__list' : 'navbar__list'} list-unstyled`}>
            <li className="has-sub">
                <span className="js-arrow">
                    <i className="fas fa-tachometer-alt"></i>Mes ordonnances</span>
            </li>
            <li>
                <span>
                    <i className="fas fa-chart-bar"></i>Mes m&eacute;dicaments</span>
            </li>
        </ul>
    );
}



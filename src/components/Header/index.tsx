import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Constants from '../../Constants';
import { getIconConfiguration } from '../../utils/SupportFunctions';
import IconRender, { IconConfig } from '../IconRender';
import './style.scss';

const Header: React.FC = () => {
    const arrowBackConfig: IconConfig = {
        size: '2rem',
        className: 'arrowBack',
    };

    const location = useLocation();
    const history = useHistory();

    const goBackClickHandler = () => {
        history.goBack();
    };

    const goBackSectionHandler = () => {
        if (location.pathname === Constants.routeNames.HOME) {
            return <div className="emptyGoBackSection" />;
        }
        return (
            <button className="goBackSection" onClick={goBackClickHandler}>
                <IconRender configuration={getIconConfiguration(arrowBackConfig, Constants.icons.MD_CHEVRON_LEFT)} />
                <span className="arrowBackText">Voltar</span>
            </button>
        );
    };

    return (
        <div className="header">
            <nav className="menu">
                <ul className="menuRow">
                    <li className="menuOption">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="menuOption">
                        <Link to="/about">Sobre</Link>
                    </li>
                </ul>
            </nav>
            {goBackSectionHandler()}
        </div>
    );
};

export default Header;

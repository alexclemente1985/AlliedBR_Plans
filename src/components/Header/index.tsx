import React from 'react';
import { Link } from 'react-router-dom';
import Constants from '../../Constants';
import IconRender, { IconConfig } from '../../utils/IconRender';
import './style.scss';

const Header: React.FC = () => {
    const arrowBackConfig: IconConfig = {
        size: '2rem',
        className: 'arrowBack',
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
            <div className="goBackSection">
                <IconRender
                    iconLibrary={Constants.iconLibraries.MATERIAL_DESIGN}
                    iconName={Constants.icons.MD_CHEVRON_LEFT}
                    iconConfig={arrowBackConfig}
                />
                <span className="arrowBackText">Voltar</span>
            </div>
        </div>
    );
};

export default Header;

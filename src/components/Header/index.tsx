import React, { useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Constants from '../../Constants';
import IconRender, { IconConfig } from '../IconRender';
import './style.scss';

const Header: React.FC = (props) => {
    const arrowBackConfig: IconConfig = {
        size: '2rem',
        className: 'arrowBack',
    };

    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        console.log('props: ', props, 'location: ', location.pathname);
    }, []);

    const goBackClickHandler = () => {
        history.goBack();
    };

    const goBackSectionHandler = () => {
        if (location.pathname.match(Constants.routeNames.HOME)) {
            return <div className="emptyGoBackSection" />;
        }
        return (
            <button className="goBackSection" onClick={goBackClickHandler}>
                <IconRender
                    iconLibrary={Constants.iconLibraries.MATERIAL_DESIGN}
                    iconName={Constants.icons.MD_CHEVRON_LEFT}
                    iconConfig={arrowBackConfig}
                />
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

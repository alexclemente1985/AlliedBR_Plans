import React from 'react';
import Constants from '../../Constants';
import { getIconConfiguration } from '../../utils/SupportFunctions';
import IconRender, { IconConfig } from '../IconRender';
import './style.scss';

const Footer: React.FC = () => {
    const iconConfig: IconConfig = {
        className: 'footerLogo',
        size: '1.0rem',
    };

    return (
        <div className="footer">
            <div className="footerContent">
                <div className="footerSocialNetworks">
                    <a className="footerLink" href="https://github.com/alexclemente1985/AlliedBR_Plans">
                        <IconRender
                            configuration={getIconConfiguration(
                                iconConfig,
                                Constants.icons.AI_FILL_GITHUB,
                                Constants.iconLibraries.ANT_DESIGN,
                            )}
                        />
                    </a>
                    <a className="footerLink" href="https://www.linkedin.com/in/alexandre-pinheiro-b701a8b9/">
                        <IconRender
                            configuration={getIconConfiguration(
                                iconConfig,
                                Constants.icons.AI_LINKEDIN_OUTLINE,
                                Constants.iconLibraries.ANT_DESIGN,
                            )}
                        />
                    </a>
                </div>
                <p className="footerInfo">Desenvolvido por Alexandre C. Pinheiro - 2021</p>
            </div>
        </div>
    );
};

export default Footer;

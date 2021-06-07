/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { IconContext } from 'react-icons';

export interface IconConfig {
    size: string;
    className: string;
}

interface Props {
    iconLibrary: string;
    iconName: string;
    iconConfig: IconConfig;
}

const IconRender: React.FC<Props> = (props: Props) => {
    const { iconLibrary, iconName, iconConfig } = props;

    const IconLib = require(`react-icons/${iconLibrary}`);

    const icon = React.createElement(IconLib[iconName]);

    console.log(iconName, iconConfig);

    return (
        <IconContext.Provider value={iconConfig}>
            <div>{icon}</div>
        </IconContext.Provider>
    );
};

export default IconRender;

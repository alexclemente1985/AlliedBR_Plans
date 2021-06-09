/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { IconContext } from 'react-icons';

export interface IconConfig {
    size: string;
    className: string;
}

export interface IconType {
    iconLibrary: string;
    iconName: string;
    iconConfig: IconConfig;
}

interface Props {
    configuration: IconType;
}

const IconRender: React.FC<Props> = (props: Props) => {
    const { configuration } = props;

    const IconLib = require(`react-icons/${configuration.iconLibrary}`);

    const icon = React.createElement(IconLib[configuration.iconName]);

    return (
        <IconContext.Provider value={configuration.iconConfig}>
            <div>{icon}</div>
        </IconContext.Provider>
    );
};

export default IconRender;

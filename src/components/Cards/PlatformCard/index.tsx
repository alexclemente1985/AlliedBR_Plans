import React from 'react';
import { Link } from 'react-router-dom';
import Constants from '../../../Constants';
import IconRender, { IconConfig } from '../../IconRender';
import * as FormatterService from '../../../utils/Formatter';
import './style.scss';

interface Props {
    platformName: string;
    platformType: string;
    platformDescription: string;
    cardClickHandler: CallableFunction;
}

const PlatformCard: React.FC<Props> = (props: Props) => {
    const { platformName, platformDescription, platformType, cardClickHandler } = props;

    const iconConfig: IconConfig = {
        className: 'platformCardIcon',
        size: '3rem',
    };

    const iconTypeHandler = (): string => {
        switch (platformType) {
            case Constants.platformTypes.COMPUTER:
                return Constants.icons.MD_COMPUTER;
            case Constants.platformTypes.TABLET:
                return Constants.icons.MD_TABLET_MAC;
            default:
                return Constants.icons.MD_WIFI;
        }
    };

    const formattedDescription: string[] = FormatterService.descriptionFormatter(platformDescription);

    return (
        <Link
            to={Constants.routeNames.PLANS.concat(`/${platformType}`)}
            className="platformCard"
            onClick={() => cardClickHandler()}
        >
            <div className="cardHeader">
                <IconRender
                    iconConfig={iconConfig}
                    iconLibrary={Constants.iconLibraries.MATERIAL_DESIGN}
                    iconName={iconTypeHandler()}
                />
                <h1 className="cardTitle">{platformName}</h1>
            </div>
            <div className="cardDescription">
                {formattedDescription.map((description, index) => (
                    <p key={index} className="description">
                        {description}
                    </p>
                ))}
            </div>
        </Link>
    );
};

export default PlatformCard;

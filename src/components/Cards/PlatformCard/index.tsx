import React from 'react';
import { Link } from 'react-router-dom';
import Constants from '../../../Constants';
import IconRender, { IconConfig } from '../../IconRender';
import * as FormatterService from '../../../utils/SupportFunctions';
import './style.scss';
import { getIconConfiguration, getIconName } from '../../../utils/SupportFunctions';

interface Props {
    platformName: string;
    platformType: string;
    platformDescription: string;
}

const PlatformCard: React.FC<Props> = (props: Props) => {
    const { platformName, platformDescription, platformType } = props;

    const iconConfig: IconConfig = {
        className: 'platformCardIcon',
        size: '3rem',
    };

    const formattedDescription: string[] = FormatterService.descriptionFormatter(platformDescription);

    return (
        <Link to={Constants.routeNames.PLANS.concat(`/${platformType}`)} className="platformCard">
            <div className="cardHeader">
                <IconRender configuration={getIconConfiguration(iconConfig, getIconName(platformType))} />
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

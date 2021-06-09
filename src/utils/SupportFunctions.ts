import { IconConfig, IconType } from '../components/IconRender';
import Constants from '../Constants';

const descriptionFormatter = (description: string): string[] => {
    return description.split('|');
};

const getPlatformName = () => {
    let platformName = '';

    if (location.pathname.match(new RegExp(Constants.platformTypes.TABLET, 'g'))) {
        platformName = Constants.platforms.TABLET;
    } else if (location.pathname.match(Constants.platformTypes.COMPUTER)) {
        platformName = Constants.platforms.COMPUTER;
    } else if (location.pathname.match(Constants.platformTypes.WIFI)) {
        platformName = Constants.platforms.WIFI;
    }

    return platformName;
};

const getIconName = (platformType: string): string => {
    switch (platformType) {
        case Constants.platformTypes.COMPUTER:
            return Constants.icons.MD_COMPUTER;
        case Constants.platformTypes.TABLET:
            return Constants.icons.MD_TABLET_MAC;
        default:
            return Constants.icons.MD_WIFI;
    }
};

const getIconConfiguration = (iconConfig: IconConfig, iconName?: string, iconLibrary?: string): IconType => {
    if (!iconName && !iconLibrary) {
        switch (getPlatformName()) {
            case Constants.platforms.COMPUTER:
                return {
                    iconName: Constants.icons.MD_COMPUTER,
                    iconLibrary: Constants.iconLibraries.MATERIAL_DESIGN,
                    iconConfig,
                };
            case Constants.platforms.TABLET:
                return {
                    iconName: Constants.icons.MD_TABLET_MAC,
                    iconLibrary: Constants.iconLibraries.MATERIAL_DESIGN,
                    iconConfig,
                };
            case Constants.platforms.WIFI:
                return {
                    iconName: Constants.icons.MD_WIFI,
                    iconLibrary: Constants.iconLibraries.MATERIAL_DESIGN,
                    iconConfig,
                };
            default:
                break;
        }
    }
    if (iconName) {
        return {
            iconName: iconName,
            iconLibrary: iconLibrary ? iconLibrary : Constants.iconLibraries.MATERIAL_DESIGN,
            iconConfig,
        };
    }

    return {
        iconName: Constants.icons.MD_ERROR_OUTLINE,
        iconLibrary: Constants.iconLibraries.MATERIAL_DESIGN,
        iconConfig,
    };
};

export { descriptionFormatter, getPlatformName, getIconConfiguration, getIconName };

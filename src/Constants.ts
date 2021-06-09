import { PlatformType } from './models/Platform';

export default {
    API_PATH: 'http://private-59658d-celulardireto2017.apiary-mock.com',
    PLATFORMS: '/plataformas',
    PLANS: '/planos',
    platformTypes: {
        TABLET: 'TBT01' as PlatformType,
        COMPUTER: 'CPT02' as PlatformType,
        WIFI: 'WF03' as PlatformType,
    },
    iconLibraries: {
        ANT_DESIGN: 'ai',
        BOOTSTRAP: 'bs',
        FEATHER: 'fi',
        FONT_AWESOME: 'fa',
        GITHUB_OCTIONS: 'go',
        HEROICONS: 'hi',
        IONICONS4: 'io',
        IONICONS5: 'io5',
        MATERIAL_DESIGN: 'md',
    },
    icons: {
        AI_FILL_GITHUB: 'AiFillGithub',
        AI_LINKEDIN_OUTLINE: 'AiOutlineLinkedin',
        MD_CHEVRON_LEFT: 'MdChevronLeft',
        MD_TABLET_MAC: 'MdTabletMac',
        MD_WIFI: 'MdWifi',
        MD_COMPUTER: 'MdComputer',
        MD_CLOSE: 'MdClose',
        MD_ERROR_OUTLINE: 'MdErrorOutline',
    },
    routeNames: {
        HOME: '/',
        ABOUT: '/about',
        PLANS: '/plans',
        PLAN_FORM: '/plan-form',
    },
    platforms: {
        TABLET: 'Tablet',
        COMPUTER: 'Computador',
        WIFI: 'Wi-Fi',
    },
};

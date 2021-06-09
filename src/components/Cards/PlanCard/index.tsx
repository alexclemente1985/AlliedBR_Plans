import React, { useEffect, useState } from 'react';
import { Plan } from '../../../models/Plan';
import Modal from '../../Modal';
import CardModal from '../../Modal/CardModal';
import FormModal from '../../Modal/FormModal';
import { getPlatformName } from '../../../utils/SupportFunctions';
import './style.scss';
import IconRender, { IconConfig, IconType } from '../../IconRender';
import Constants from '../../../Constants';
import ConfirmationModal from '../../Modal/ConfirmationModal';

interface Props {
    plan: Plan;
}

const PlanCard: React.FC<Props> = (props: Props) => {
    const { plan } = props;
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openHiringForm, setOpenHiringForm] = useState<boolean>(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const iconConfig: IconConfig = {
        className: 'planCardIcon',
        size: '2.5rem',
    };

    const handleClick = () => {
        setOpenModal(!openModal);
        setOpenHiringForm(false);
        setIsFormSubmitted(false);
    };

    const handleHiringConfirmation = () => {
        setOpenHiringForm(true);
    };

    const submitFormHandler = () => {
        setIsFormSubmitted(true);
    };

    const modalRender = () => {
        if (openHiringForm) {
            return isFormSubmitted ? (
                <ConfirmationModal />
            ) : (
                <FormModal onSubmitForm={submitFormHandler} planName={getPlatformName()} planType={plan.franquia} />
            );
        }
        return <CardModal plan={plan} handleHiringConfirmation={handleHiringConfirmation} />;
    };

    const getIconConfiguration = (): IconType => {
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
            default:
                return {
                    iconName: Constants.icons.MD_WIFI,
                    iconLibrary: Constants.iconLibraries.MATERIAL_DESIGN,
                    iconConfig,
                };
        }
    };

    return (
        <>
            {plan.ativo && (
                <>
                    <button className="planCard" onClick={handleClick}>
                        <IconRender configuration={getIconConfiguration()} />
                        <h1 className="planCardTitle">{plan.franquia}</h1>
                    </button>
                    {openModal && (
                        <Modal id="modal" onClose={handleClick}>
                            {modalRender()}
                        </Modal>
                    )}
                </>
            )}
        </>
    );
};

export default PlanCard;

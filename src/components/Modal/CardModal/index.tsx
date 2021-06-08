import React from 'react';
import Modal from '../index';
import { Plan } from '../../../models/Plan';
import './style.scss';

interface Props {
    openModal: boolean;
    handleCloseModal: CallableFunction;
    plan: Plan;
    children: JSX.Element;
}

const CardModal: React.FC<Props> = (props: Props) => {
    const { openModal, handleCloseModal, plan, children } = props;
    const { aparelho } = plan;
    return (
        <Modal id="modal" onClose={handleCloseModal}>
            <h1>Eita</h1>
        </Modal>
    );
};

export default CardModal;

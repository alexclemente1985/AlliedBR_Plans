import React from 'react';
import './style.scss';

const ConfirmationModal: React.FC = () => {
    return (
        <div className="confirmationModal">
            <h1 className="confirmationModalTitle">Plano contratado com sucesso!</h1>
            <p className="confirmationModalContent">
                Em breve você estará aproveitando os benefícios do seu novo plano!
            </p>
        </div>
    );
};

export default ConfirmationModal;

import React from 'react';
import { Plan } from '../../../models/Plan';
import './style.scss';

interface Props {
    plan: Plan;
    handleHiringConfirmation: CallableFunction;
}

const CardModal: React.FC<Props> = (props: Props) => {
    const { plan, handleHiringConfirmation } = props;
    const { aparelho } = plan;

    const handleButtonClick = () => {
        handleHiringConfirmation();
    };
    return (
        <div className="cardModal">
            <h1 className="cardTitle">Franquia {plan.franquia}</h1>
            <h2 className="cardPrice">R${plan.valor}</h2>

            {aparelho && (
                <ul className="cardModalValues">
                    <li className="cardModalRow">
                        <span className="highlight">Equipamento:</span> {aparelho.nome}
                    </li>
                    <li className="cardModalRow">
                        <span className="highlight">Parcelamento:</span> {aparelho.numeroParcelas}
                    </li>
                    <li className="cardModalRow">
                        <span className="highlight">Valor de cada parcela:</span> R${' '}
                        {aparelho.valorParcela || aparelho.valor}
                    </li>
                    <li className="cardModalRow">
                        <span className="highlight">Valor total:</span> R$ {aparelho.valor}
                    </li>
                </ul>
            )}

            <div className="cardModalFooter">
                <button onClick={handleButtonClick} className="cardModalButton">
                    Contratar o plano
                </button>
            </div>
        </div>
    );
};

export default CardModal;

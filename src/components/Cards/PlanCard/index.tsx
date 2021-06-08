import React, { useEffect, useRef, useState } from 'react';
import { Plan } from '../../../models/Plan';
import Modal from '../../Modal';
import './style.scss';

interface Props {
    plan: Plan;
}

const PlanCard: React.FC<Props> = (props: Props) => {
    const { plan } = props;
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        console.log('vai cair aqui kct');
        setOpenModal(!openModal);
    };

    const ref = useRef();

    useEffect(() => {
        console.log('ref: ', ref);
    }, [ref]);
    return (
        <>
            {plan.ativo && (
                <>
                    <button ref={ref.current} className="planCard" onClick={handleClick}>
                        <h1>{plan.franquia}</h1>
                    </button>
                    {openModal && (
                        <Modal id="modal" onClose={handleClick}>
                            <h1>Eita</h1>
                        </Modal>
                    )}
                </>
            )}
        </>
    );
};

export default PlanCard;

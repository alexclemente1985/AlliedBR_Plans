import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { planRequest } from '../../store/plans/actions';
import PlanSection from '../../components/PlanSection';
import './style.scss';
import { getPlatformName } from '../../utils/SupportFunctions';

interface RouteParam {
    id: string;
}

const PlansScreen: React.FC = () => {
    const { id } = useParams<RouteParam>();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(planRequest(id));
    }, []);

    return (
        <div className="planScreen">
            <h1 className="screenTitle">Planos Disponíveis para {getPlatformName()}</h1>
            <PlanSection />
        </div>
    );
};

export default PlansScreen;

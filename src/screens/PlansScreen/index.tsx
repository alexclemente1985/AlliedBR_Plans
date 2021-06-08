import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ApplicationState } from '../../store';
import { planRequest } from '../../store/plans/actions';
import PlanSection from '../../components/PlanSection';
import './style.scss';

interface RouteParam {
    id: string;
}

const PlansScreen: React.FC = () => {
    const { planList, platformList } = useSelector((state: ApplicationState) => ({
        planList: state.plans.data,
        platformList: state.platforms.data,
    }));

    const dispatch = useDispatch();

    const { id } = useParams<RouteParam>();

    const [platformName, setPlatformName] = useState<string>('');

    useEffect(() => {
        if (platformList.length > 0) {
            const platName = platformList.find((platform) => platform.sku === id)?.nome;
            if (platName) setPlatformName(platName);
        }
    }, [platformList]);

    useEffect(() => {
        dispatch(planRequest(id));
    }, []);

    return (
        <div className="planScreen">
            <PlanSection />
        </div>
    );
};

export default PlansScreen;

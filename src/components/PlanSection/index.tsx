import React from 'react';
import { useSelector } from 'react-redux';
import { Plan } from '../../models/Plan';
import { ApplicationState } from '../../store';
import PlanCard from '../Cards/PlanCard';
import './style.scss';

const PlanSection: React.FC = () => {
    const { planList } = useSelector((state: ApplicationState) => ({
        planList: state.plans.data,
    }));

    return (
        <div className="plansSection">
            {planList && planList.map((plan: Plan) => <PlanCard key={plan.sku} plan={plan} />)}
        </div>
    );
};

export default PlanSection;

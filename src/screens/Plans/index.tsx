import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ApplicationState } from '../../store';
import { planRequest } from '../../store/plans/actions';
import { Plan } from '../../models/Plan';
import './style.scss';
import PlanCard from '../../components/Cards/Plan';
import PlanSection from '../../components/PlanSection';

interface RouteParam {
    id: string;
}

const PlansScreen: React.FC = () => {
    const { planList } = useSelector((state: ApplicationState) => ({
        planList: state.plans.data,
    }));
    //const { id } = props;

    // const planRequestObject: PlanRequest = 'TBT01'; /* id */
    const dispatch = useDispatch();

    const { id } = useParams<RouteParam>();
    useEffect(() => {
        dispatch(planRequest(id));
    }, []);

    useEffect(() => {
        console.log('planList: ', planList, id);
    }, [planList]);

    return (
        <div className="planScreen">
            <PlanSection />
        </div>
    );
};

export default PlansScreen;

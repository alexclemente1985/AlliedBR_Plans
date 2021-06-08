import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Platform } from '../../models/Platform';
import { ApplicationState } from '../../store';
import { platformsRequest } from '../../store/platforms/actions';
import PlatformCard from '../Cards/PlatformCard';
import './style.scss';

const PlatformSection: React.FC = () => {
    const { PlatformSection } = useSelector((state: ApplicationState) => ({
        PlatformSection: state.platforms.data,
    }));

    const dispatch = useDispatch();

    const cardClickHandler = () => {
        console.log('clicou');
    };

    useEffect(() => {
        console.log('Iniciando o platform section...');
        dispatch(platformsRequest());
    }, []);

    useEffect(() => {
        console.log('PlatformSection: ', PlatformSection);
    }, [PlatformSection]);

    return (
        <div className="platformSection">
            <ul className="optionsRow">
                {PlatformSection.map((platform: Platform) => (
                    <li key={platform.sku}>
                        <PlatformCard
                            platformDescription={platform.descricao}
                            platformName={platform.nome}
                            platformType={platform.sku}
                            cardClickHandler={cardClickHandler}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlatformSection;

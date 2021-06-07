import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Platform } from '../../models/Platform';
import { ApplicationState } from '../../store';
import { platformsRequest } from '../../store/platforms/actions';

const PlatformSection: React.FC = () => {
    const { PlatformSection } = useSelector((state: ApplicationState) => ({
        PlatformSection: state.platforms.data,
    }));

    const dispatch = useDispatch();
    useEffect(() => {
        console.log('Iniciando o platform section...');
        dispatch(platformsRequest());
    }, []);

    useEffect(() => {
        console.log('PlatformSection: ', PlatformSection);
    }, [PlatformSection]);

    return (
        <div>
            <ul>
                {PlatformSection.map((platform: Platform) => (
                    <li key={platform.sku}>
                        <button>{platform.nome}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlatformSection;

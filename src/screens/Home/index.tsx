import React from 'react';
import PlatformSection from '../../components/PlatformSection';
import './style.scss';

const HomeScreen: React.FC = () => {
    return (
        <div className="home">
            <h1 className="homeTitle">Plataformas Disponíveis</h1>
            <PlatformSection />
        </div>
    );
};

export default HomeScreen;

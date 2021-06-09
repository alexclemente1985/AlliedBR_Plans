import React from 'react';
import './style.scss';

const AboutScreen: React.FC = () => {
    return (
        <div className="aboutScreen">
            <h1 className="screenTitle">Sobre o Projeto</h1>

            <div className="screenContent">
                <p className="aboutProjectInfo">
                    Projeto criado como avaliação para vaga de Desenvolvedor Front-End na empresa Allied Brasil.
                </p>
                <p className="aboutProjectInfo">
                    Construído em ReactJS com Redux-Saga e Typescript, sendo estilizado com Sass.
                </p>
            </div>
        </div>
    );
};

export default AboutScreen;

import React, { useEffect } from 'react';
import Constants from '../../Constants';
import IconRender, { IconConfig } from '../IconRender';
import './style.scss';

interface Props {
    children: JSX.Element;
    onClose: CallableFunction;
    id: string;
}

const Modal: React.FC<Props> = (props: Props) => {
    const { children, onClose, id } = props;

    const iconConfig: IconConfig = {
        className: 'closeButton',
        size: '1rem',
    };

    const handleOutsideClick = (e: any) => {
        console.log('TARGET ID', e.target.id, 'ID props: ', id);
        if (e.target.id === id) {
            console.log('TARGET: ', e.target);
            return onClose();
        }
    };

    const escButtonHandler = (e: any) => {
        if (e && e.keyCode === 27) {
            return onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', escButtonHandler, false);
        return () => {
            document.removeEventListener('keydown', escButtonHandler, false);
        };
    }, []);

    return (
        <div className="modal">
            <div id="modal" className="modalBackground" onClick={handleOutsideClick} />
            <div className="container">
                <div className="closeButtonContainer">
                    <button onClick={() => onClose()}>
                        <IconRender
                            iconConfig={iconConfig}
                            iconLibrary={Constants.iconLibraries.MATERIAL_DESIGN}
                            iconName={Constants.icons.MD_CLOSE}
                        />
                    </button>
                </div>
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default Modal;

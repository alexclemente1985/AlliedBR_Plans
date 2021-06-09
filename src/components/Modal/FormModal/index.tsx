import React, { useEffect, useState } from 'react';
import { ValidationError } from 'yup';
import { HiringFormType } from '../../../models/HiringForm';
import { formSchema, getInitialHiringFormState } from '../../../utils/FormFuntions';
import './style.scss';
interface Props {
    planName: string;
    planType: string;
    onSubmitForm: CallableFunction;
}

const FormModal: React.FC<Props> = (props: Props) => {
    const { planName, planType, onSubmitForm } = props;

    const [form, setForm] = useState<HiringFormType>(getInitialHiringFormState());
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = await formSchema.isValid(form);

        if (isValid) {
            onSubmitForm();
        }
    };

    const validate = async () => {
        try {
            await formSchema.validate(form, { abortEarly: false });
            setFormErrors({});
        } catch (e) {
            if (e instanceof ValidationError) {
                const errors = {};
                e.inner.forEach((key) => {
                    errors[key.path as any] = key.message;
                });
                setFormErrors(errors);
            }
        }
    };

    useEffect(() => {
        validate();
    }, [form]);

    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const haveErrors = () => Object.keys(formErrors).length > 0;

    const haveInputErrors = (inputType: string) => {
        return !!formErrors[inputType] && form[inputType] !== getInitialHiringFormState()[inputType];
    };

    return (
        <form className="formModal" onSubmit={handleSubmit}>
            <div className="formModalMain">
                <div className="formModalHeader">
                    <h1 className="formModalTitle">Formulário de Contratação</h1>
                    <h2 className="formModalSubtitle">Plano {`${planName} ${planType}`}</h2>
                </div>
                <div className="formModalContent">
                    <div className="formModalRow">
                        <label className="formModalInputLabel">
                            Nome:<span className="mandatory">*</span>
                        </label>
                        <input
                            className={`formModalInput ${haveInputErrors('name') ? 'formError' : ''}`}
                            id="name"
                            type="text"
                            value={form.name}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className="formModalRow">
                        <label className="formModalInputLabel">
                            Email:<span className="mandatory">*</span>
                        </label>
                        <input
                            className={`formModalInput ${haveInputErrors('email') ? 'formError' : ''}`}
                            id="email"
                            type="text"
                            value={form.email}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className="formModalRow">
                        <label className="formModalInputLabel">
                            Nascimento (dd/mm/yyyy):<span className="mandatory">*</span>
                        </label>
                        <input
                            className={`formModalInput ${haveInputErrors('birthDate') ? 'formError' : ''}`}
                            id="birthDate"
                            type="text"
                            value={form.birthDate}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className="formModalRow">
                        <label className="formModalInputLabel">
                            CPF:<span className="mandatory">*</span>
                        </label>
                        <input
                            className={`formModalInput ${haveInputErrors('cpf') ? 'formError' : ''}`}
                            id="cpf"
                            type="text"
                            value={form.cpf}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className="formModalRow">
                        <label className="formModalInputLabel">
                            Telefone:<span className="mandatory">*</span>
                        </label>
                        <input
                            className={`formModalInput ${haveInputErrors('tel') ? 'formError' : ''}`}
                            id="tel"
                            type="text"
                            value={form.tel}
                            onChange={handleFormChange}
                        />
                    </div>
                </div>
            </div>
            <div className="formModalFooter">
                <div className="formFooterContent">
                    <p className="formInfo">
                        <span className="mandatory">*</span> Campos obrigatórios.
                    </p>
                    <input
                        type="submit"
                        className={`formModalSubmitButton ${haveErrors() ? 'errorButton' : ''}`}
                        value="Enviar"
                    />
                </div>
            </div>
        </form>
    );
};

export default FormModal;

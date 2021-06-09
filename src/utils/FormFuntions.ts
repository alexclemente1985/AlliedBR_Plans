import { HiringFormType } from '../models/HiringForm';
import * as yup from 'yup';

const getInitialHiringFormState = (): HiringFormType => ({
    name: '',
    email: '',
    birthDate: '',
    cpf: '',
    tel: '',
});

const getInitialHiringErrorsFormState = () => ({});

const formSchema = yup.object().shape({
    email: yup.string().email('Digite um email válido').required('Informe um valor de email'),
    name: yup.string().required('Nome é obrigatório'),
    birthDate: yup
        .string()
        .required('Data de nascimento é obrigatória')
        .matches(new RegExp(/(\d{2})[-.\/](\d{2})[-.\/](\d{4})/, 'gi'), 'Data inválida'),
    cpf: yup.string().required().length(11, 'Deve ter no mínimo 11 dígitos'),
    tel: yup
        .string()
        .required('Telefone é obrigatório')
        .length(10, 'Deve ter 10 dígitos')
        .matches(new RegExp(/\d{10}/), 'Formato inválido'),
});

export { getInitialHiringFormState, formSchema, getInitialHiringErrorsFormState };

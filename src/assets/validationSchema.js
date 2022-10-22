import * as yup from 'yup'

const validationSchema = yup.object().shape({
    login: yup.string().required(),
    password: yup.string().required(),
});

export default validationSchema;
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required!')
        .min(5, 'Username must be 5 or more characters!'),
    size: yup
        .string(),
        // .oneOf(['Small', 'Medium', 'Large']),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushrooms: yup.boolean(),
    jalapenos: yup.boolean(),
    olives: yup.boolean(),
    special: yup
        .string()
        .trim()
        .required('Special instructions required!')
});

export default formSchema;
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required!')
        .min(2, 'name must be at least 2 characters'),
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
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required!')
        .min(3, 'Username must be 3 or more characters long ya chump!'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'Size is required!']),
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
import * as yup from 'yup';
import SignUp from '../screens/Login';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('email adress is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export const SignUpSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(5, ({min}) => `Name must be at least ${min} characters`)
    .required('Name is required'),
  email: yup
    .string()
    .trim()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .trim()
    .min(8, ({min}) => `password must be at least ${min} characters`)
    .required('Password is required'),
});

export const emailSchema = yup.object().shape({
  email: yup.string().required('Please enter your email'),
});

export const restPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required('enter your new password')
    .min(8, ({min}) => `password must at least ${min} charakters`),
  confirmPassword: yup
    .string()
    .required('enter your confirm password')
    .min(8, ({min}) => `password must at least ${min} charakters`),
});

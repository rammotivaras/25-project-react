import { object, string, } from 'yup';
import * as Yup from 'yup';

export const LoginValidator=async (values)=>{
    console.log(values,"values")

    //   console.log(errorsFormik,"errorsFormik")
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    console.log(errors,"errors")
    return errors;
  }



 export const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('ijijjjRequired'),
    email: Yup.string().email('Invalid email').required('email- Required'),
  });
 
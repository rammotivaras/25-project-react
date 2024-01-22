import { Field, Formik } from 'formik';
import { LoginValidator, SignupSchema } from '../validator/login';

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
    validationSchema={SignupSchema}
      initialValues={{ email: '', password: '' }}
      // validate={values => LoginValidator(values)}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => {
        console.log(  values,
        errors,
        touched,"my form value")
        return (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {touched.email && errors.email && <p style={{
            color:"red"
          }}>{errors.email}</p>}
          <Field
            // type="password"
            name="password"
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}}
    </Formik>
  </div>
);

export default Basic;
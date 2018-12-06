import * as React from "react";
import { Formik } from "formik";
import { FormCard, FormTextInput, FormCheckboxInput, StandaloneFormPage } from "tabler-react";
import { Link, } from 'react-router-dom';

const defaultStrings = {
  title: "Login to your manager",
  buttonText: "Sign in",
  emailLabel: "Email",
  emailPlaceholder: "Enter email",
  passwordLabel: "Password",
  passwordPlaceholder: "Password",
  termsLabel: 'Remember me'
};

export default class LoginPage extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={values => {
          // same as above, but feel free to move this into a class method now.
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          // if (!values.password) {
          //   errors.password = "Required"
          // } else if(values.password.length<6) {
          //   errors.password = "Password must be longer than 6 digits"
          // }
          return errors;
        }}
        onSubmit={(
          values,
          { setSubmitting, setErrors /* setValues and other goodies */ }
        ) => {
          this.props.history.push('/home')
        }}
        render={({
          action,
          method,
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
            <StandaloneFormPage>
              <FormCard
                buttonText={defaultStrings.buttonText}
                title={defaultStrings.title}
                onSubmit={handleSubmit}
                action={action}
                method={method}
              >
                <FormTextInput
                  name="email"
                  label={defaultStrings.emailLabel}
                  placeholder={
                    defaultStrings.emailPlaceholder
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values && values.email}
                  error={errors && errors.email}
                />
                <FormTextInput
                  name="password"
                  type="password"
                  label={defaultStrings.passwordLabel}
                  placeholder={
                    defaultStrings.passwordPlaceholder
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values && values.password}
                  error={errors && errors.password}
                />
                <FormCheckboxInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values && values.terms}
                  name="terms"
                  label={defaultStrings.termsLabel}
                />
              </FormCard>
              <div style={{ textAlign: 'center' }}>
                <span>Don't have account yet? </span>
                <Link className="font-medium" to="/register">Sign up</Link>
              </div>
              <div style={{ position: 'relative', top: '-255px', left: '200px' }}>
                <Link className="font-medium" to="/forgot-password">I forgot the password</Link>
              </div>
            </StandaloneFormPage>

          )}
      />
    )
  }
}


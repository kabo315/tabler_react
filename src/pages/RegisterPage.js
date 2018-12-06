
import * as React from "react";
import { Formik } from "formik";

import { FormCard, FormTextInput, FormCheckboxInput, StandaloneFormPage, } from "tabler-react";
import { Link } from 'react-router-dom'

const defaultStrings = {
  title: "Create new manager account",
  buttonText: "Create new account",
  nameLabel: "Username",
  namePlaceholder: "Enter username",
  emailLabel: "Email",
  emailPlaceholder: "Enter email",
  passwordLabel: "Password",
  passwordPlaceholder: "Password",
};

export default class RegisterPage extends React.Component {
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
                  name="name"
                  label={defaultStrings.nameLabel}
                  placeholder={
                    defaultStrings.namePlaceholder
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values && values.name}
                  error={errors && errors.name}
                />
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
                >
                  <span>Agree the</span>
                  <Link className="font-medium" to="/register">terms and policy</Link>
                </FormCheckboxInput>
              </FormCard>
              <div style={{ textAlign: 'center' }}>
                <span>Already have account? </span>
                <Link className="font-medium" to="/">Sign in</Link>
              </div>
            </StandaloneFormPage>
          )}
      />
    )
  }

}


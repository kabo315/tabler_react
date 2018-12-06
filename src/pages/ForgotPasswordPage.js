// @flow

import * as React from "react";

import { FormCard, FormTextInput, StandaloneFormPage } from "tabler-react";
import { Formik } from "formik";

import { Link } from 'react-router-dom'

const defaultStrings = {
  title: "Forgot Password",
  buttonText: "Send password reset e-mail",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter email",
  instructions:
    "Enter your email address and your password will be reset and emailed to you.",
};

export default class ForgotPasswordPage extends React.Component {
  render() {

    return (
      <Formik
        initialValues={{
          email: "",
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
                <p className="text-muted">
                  {defaultStrings.instructions}
                </p>
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
              </FormCard>
              <div style={{ textAlign: 'center' }}>
                <span>Forget it, </span>
                <Link className="font-medium" to="/">Send me back</Link>
                <span> to the sign in screen</span>
              </div>
            </StandaloneFormPage>
          )}
      />)
  }
}



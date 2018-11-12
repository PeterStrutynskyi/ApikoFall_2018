import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form';
import * as Api from "../../../api/Api";
import Link from "react-router-dom/es/Link";
import Redirect from "react-router-dom/es/Redirect";


const Container = styled.div`
  margin: 2rem auto;
`;


const RegisterScene = () => {

  const validate = ( values ) => {
    const errors = {};

    // first last names
    if(!values.firstName || values.firstName.trim().length < 0) {
      errors.firstName = 'This field is required!'
    }

    if(!values.lastName || values.lastName.trim().length < 0) {
      errors.lastName = 'This field is required!'
    }


    // email
    if(!values.email || values.email.trim().length < 0) {
      errors.email = 'This field is required!'
    }

    else if (!values.email.includes('@')) {
      errors.email = 'Enter valid email'
    }


    // password
    if(!values.password || values.password.trim().length < 8) {
      errors.password = 'Password should be 8 symbols length'
    }

    return errors;
  };




  async function onSubmit (values, form) {
    try {

      const res = await Api.Auth.register(values);


      Api.setToken(res.data.token);

      form.reset();

    } catch (e) {
      return {
        [FORM_ERROR]: 'User already registered!'
      };
    }
  }



  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, submitError } )=> (

          <div>
            <div>
              <Field name="firstName">
                {({ input, meta }) => (
                  <div>
                    <label>FirstName</label>
                    <input {...input} type="text" placeholder="Enter your First Name..." />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>

            <div>
              <Field name="lastName">
                {({ input, meta }) => (
                  <div>
                    <label>LastName</label>
                    <input {...input} type="text" placeholder="Enter your Last Name..." />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="email">
                {({ input, meta }) => (
                  <div>
                    <label>Email</label>
                    <input {...input} type="text" placeholder="Enter your email..." />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>

            <div>
              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <label>Password</label>
                    <input {...input} type="text" placeholder="Enter your password..." />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>

            <button onClick={handleSubmit}>Register</button>

            {submitError && <div>{submitError}</div>}

            <div>
              Have account?
              <Link to='/login'>Login</Link>
            </div>

          </div>
        )}
      />

    </Container>
  );
};

export default RegisterScene;
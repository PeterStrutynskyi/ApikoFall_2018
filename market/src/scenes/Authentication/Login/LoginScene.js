import React from 'react';
import { Redirect } from 'react-router';
import { Link, withRouter } from 'react-router-dom';

import styled from 'styled-components';
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form';

import * as Api from "../../../api/Api";


const Container = styled.div`
  margin: 2rem auto;
`;




const LoginScene = ( props ) => {

  let { from } = props.location.state || { from: { pathname: '/' } };


  const validate = ( values ) => {
    const errors = {};

    if(!values.email || values.email.trim().length < 0) {
      errors.email = 'This field is required!'
    }

    else if (!values.email.includes('@')) {
      errors.email = 'Enter valid email'
    }

    if(!values.password || values.password.trim().length < 8) {
      errors.password = 'Password should be 8 symbols length'
    }
    return errors;
  };

  async function onSubmit (values, form) {
    try {

      const res = await Api.Auth.login(values);


      Api.setToken(res.data.token);

      form.reset();

      props.history.push(from);

      // return <Redirect to={from} />;

    } catch (e) {
      return {
        [FORM_ERROR]: 'Wrong email or password'
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
                    <input {...input} type="password" placeholder="Enter your password..." />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>

            <button onClick={handleSubmit}>Login</button>

            {submitError && <div>{submitError}</div>}


            <div>
              Haven't account?
              <Link to='/register'>Register</Link>
            </div>


          </div>
        )}
      />

    </Container>
  );
};

export default LoginScene;

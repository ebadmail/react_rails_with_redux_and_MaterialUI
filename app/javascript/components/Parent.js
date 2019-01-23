import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import asyncValidate from './asyncValidate'
import { withStyles,  withTheme, createMuiTheme } from '@material-ui/core/styles';
import { orange,purple } from '@material-ui/core/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    //{...custom}
  />
)

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
)

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
)

const renderSelectField = (
  { input, label, meta: { touched, error }, children, ...custom },
) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
)

let SignInForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return <form onSubmit={handleSubmit}>
  <div>
    <Field
      name="firstName"
      component={renderTextField}
      label="First Name"
    />
  </div>
  <div>
    <Field name="lastName" component={renderTextField} label="Last Name" />
  </div>
  <div>
    <Field name="email" component={renderTextField} label="Email" rows={2} />
  </div>
  <div>
    <Field name="sex" component={renderRadioGroup}>
      <RadioButton value="male" label="male" />
      <RadioButton value="female" label="female" />
    </Field>
  </div>
  <div>
    <Field
      name="favoriteColor"
      component={renderSelectField}
      label="Favorite Color"
    >
      <MenuItem value="ff0000" primaryText="Red" />
      <MenuItem value="00ff00" primaryText="Green" />
      <MenuItem value="0000ff" primaryText="Blue" />
    </Field>
  </div>
  <div>
    <Field name="employed" component={renderCheckbox} label="Employed" />
  </div>
  <div>
    <Field
      name="notes"
      component={renderTextField}
      label="Notes"
      multiLine={true}
      rows={2}
    />
  </div>
  <div>
    <button type="submit" disabled={pristine || submitting}>Submit</button>
    <button type="button" disabled={pristine || submitting} onClick={reset}>
      Clear Values
    </button>
  </div>
</form>;
};

const validate = val => {
  const errors = {};
  if (!val.firstName) {
    console.log('First Name is required');
    errors.firstName = 'Required';
  }
  if (!val.lastName) {
    console.log('Last Name is required');
    errors.lastName = 'Required';
  }
  if (!val.email) {
    console.log('email is required');
    errors.email = 'Required';
  } else if (!/^.+@.+$/i.test(val.email)) {
    console.log('email is invalid');
    errors.email = 'Invalid email address';
  }
  if (!val.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(val.age))) {
    errors.age = 'Must be a number'
  } else if (Number(val.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div className="control">
      <label className="field">{label}</label>
      <input className="input" {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

SignInForm = reduxForm({
  form: 'signIn',
  validate,
  asyncValidate
})(SignInForm);

class ParentComponent extends Component {

  handleSignIn = values => {
    console.log(values);
  };

  render() {

    function parent(state = null, action) {
        return state;
      }
      
    const reducer = combineReducers({ form: formReducer,});

    const store = createStore(reducer, this.props);

    return (

  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div style={{ padding: 15 }}>
        <h2>Material UI Example</h2>
        <SignInForm onSubmit={this.handleSignIn} />
      </div>
    </MuiThemeProvider>
  </Provider>

    );
  }
}

export default  withTheme()(ParentComponent);

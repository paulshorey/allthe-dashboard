import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ValidateForm, ValidateField, ValidateButton, validations } from 'src/containers/validateForm';
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";
import md5 from "md5";

class ThisComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "ps@artspaces.net",
      password: "test"
    }
  }
  handleSubmit = () => {
    this.props.dispatch(this.props.actions.RX_ACCOUNT_LOGIN({ "email": this.state.email, "password": md5(this.state.password) }));  
  }
  render() {
    return (
      !this.props.account._id
      ?
      <div>
        <p>Login</p>
        <ValidateForm
          onSubmit={this.handleSubmit}
        >

          <ValidateField
            name="email"
            value={this.state.email}
            validations={[validations.required, validations.email]} 
          >
            <legend>Email:</legend>
            <InputGroup
              name="email"
              type="text"
              placeholder="email"
              onChange={(event)=>{ this.setState({ email: event.target.value }); }}
              value={this.state.email}
            />
          </ValidateField>


          <ValidateField 
            name="password"
            value={this.state.password} 
            validations={[validations.required]} 
          >
            <legend>Password:</legend>
            <InputGroup
              context={this}
              name="password"
              type="password"
              placeholder="password"
              onChange={(event)=>{ this.setState({ password: event.target.value }); }}
              value={this.state.password}
            />
          </ValidateField>


          <ValidateButton type="submit">
            <Button icon="tick" type="submit">
              Submit
            </Button>
          </ValidateButton>

          <ValidateButton 
            type="reset"
            onClick={(initialValues)=>{
              this.setState(initialValues);
            }}
          >
            <Button icon="cross">
              Reset
            </Button>
          </ValidateButton>

        </ValidateForm>
      </div>
      :
      <Redirect to="/account" />
    )
  }
}

const mapStateToProps = function(state) {
  return {
    account: state.account,
    actions: state.actions
  }
}
export default connect(mapStateToProps)(ThisComponent);
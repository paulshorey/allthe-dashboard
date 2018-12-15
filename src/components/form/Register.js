import React from "react";
import { connect } from 'react-redux';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }
  render() {
    return (
      <div>
        <input 
          placeholder="email" 
          type="text" 
          value={this.state.email}
          onChange={(event)=>{
            this.setState({
              email: event.target.value
            })
          }}
        />
        <input 
          placeholder="password" 
          type="password" 
          value={this.state.password}
          onChange={(event)=>{
            this.setState({
              password: event.target.value
            })
          }}
        />
        <button onClick={()=>{ 
          
          this.props.dispatch(this.props.actions.RX_LOGIN({ "email": this.state.email, "password": this.state.password }));

        }}>
          Submit
        </button>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    account: state.account,
    actions: state.actions
  }
}
export default connect(mapStateToProps)(RegisterForm);
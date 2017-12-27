
    
import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (

        <div>
        <form name = "myform"> 
        // onClick not working
        <div id= "submit"><input type="button" value="Login" name="Submit" onClick= "validate()" /> </div>
        <div id = "UsrData">
        ENTER USER NAME <input type="text" name="username" /> ENTER PASSWORD <input type="password" name="pword" />
        
        </div>
        </form>
        </div>
		);
		}
	}
export default Login;
       
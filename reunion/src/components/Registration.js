import React, { Component } from 'react';
// this is the registration Button on the Landing Page.


class Registration extends Component {
  render() {
    return (

        <div>
        <form action="./pages/RegPage.js">
        <input type="submit" value="Register" />
        </form>
        </div>
		);
	}
}
export default Registration;
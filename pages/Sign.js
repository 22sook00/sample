import React, { useState } from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import {SignsStyle} from '../style/signStyle'

const Sign = ({showSignup ,make_main_smaller }) => {
  
  return <SignsStyle>
    <div className = 'signBox'>
      <p onClick = {make_main_smaller} showSignup = {showSignup}>SIGN_IN</p> 
      <p onClick = {make_main_smaller} showSignup= {showSignup} >SIGN_UP</p>
    </div>
    <SignIn/>
    <SignUp/>
    </SignsStyle>
}

export default Sign;
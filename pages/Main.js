import React, {useState} from 'react'
import Headers from '../components/Headers'
import Sign from './Sign.js'
import SignUp from '../components/SignUp'
import {MainBackground} from '../style/mainStyle'

const Main = ({showSignup,make_main_smaller}) => {
  
  return <>
    <Headers/>
    <Sign make_main_smaller = {make_main_smaller}/>
    {!showSignup ? 
    <MainBackground>
        <div className = 'main_title'>
        <h1>잘 알고 키우자</h1>
        <h2>BE BETTER PET'S BUDDY!</h2> 
      </div>
    </MainBackground>
    :
    <SignUp/>
    }
    
    </>
}

export default Main;
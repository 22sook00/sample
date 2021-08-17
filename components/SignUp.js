import React from 'react'
import {SignUpStyle} from '../style/signStyle'

const SignUp = () => {
  return <>
  <SignUpStyle>
    <h2>회원이 되어 <br/> 더 많은 정보를 <br/>얻어가세요!</h2>
    <form>
      <input type = 'text' placeholder = '아이디를 입력하세요'></input><br/>
      <input type = 'password' placeholder = '최소 8자리~12자리 숫자영문 조합으로 입력하세요'></input><br/>
      <input type = 'password' placeholder = '비밀번호를 확인해주세요'></input><br/>
      <input type = 'email' placeholder = 'email 형식에 맞게 입력하세요' /><br/>

      <button>회원가입</button>
    </form>
    </SignUpStyle>
    </>
}

export default SignUp;
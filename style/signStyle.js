import styled ,{keyframes} from 'styled-components'

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;


export const SignsStyle = styled.div`
>.signBox{
  width : 100px;
  margin : 20px;
  padding-top: 10px;
  >p{
    font-size : 2em;
    font-family :"Bangers";
    margin : 5px ;
    cursor: pointer;
    &:hover{
      background: -webkit-linear-gradient(5deg, #967adc, #ffce54);
                -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      -webkit-font-smoothing: antialiased;
    }
  }
}
`

export const SignUpStyle = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align : center;
background: white;
border-radius: 20px;
margin: 100px auto;
padding : 20px;

animation-duration: 0.25s;
animation-timing-function: ease-out;
animation-name: ${slideUp};
animation-fill-mode: forwards;

>form > input{
  margin : 5px;
}
>form >button{
  margin-top : 10px;
  border: none;
  padding :10px;
  border-radius: 10px;
}

`
export const SingInStyle = styled.div`
font-size : 50px;
position: absolute;
top : 500px;
`

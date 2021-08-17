import styled , {keyframes ,createGlobalStyle}from 'styled-components'

/* 전역 스타일 */
export const GlobalStyle = createGlobalStyle`
  html , body {
    margin : 0px; 
    padding : 0px;
background : linear-gradient(10deg, #10cfad,#37bc9b);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  *{
  @font-face {
    font-family: 'Bangers', cursive;
    src: url(./Bangers-Regular.ttf);
  }
  button, input{
    &:active,:focus{
      outline-color : #ffce54;
    }
  }
  button {
    cursor: pointer;
  }
}
`

/* keyframes */

/* 메인 스타일 */
export const MainBackground = styled.main`
  
  position: relative;
  z-index : 100000;
  top : 0 ;
  left : 0;
  right : 0;
  bottom : 0;
  
  padding : 10px;
  width : 95vw;
  height : 70vh;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: white;
  border-radius: 140px 0 140px 0;
  transition: all ease 1s 0s;

>.main_title{
  position: absolute;
  z-index: 100;
  margin-right: 50px;
  text-align: right;
  >h1{
  width : 100%;
  margin: 0  ;
  box-sizing: border-box;
  font-size : 4.2em; 
  }
  >h2{
    font-family :"Bangers";
    font-size : 2.5em;
    text-shadow: 2px 2px 2px black;
    color: #ffce54;
    margin-top: 0;
  }
}
`

export const HeaderStyle = styled.header`
>nav{
  float: right;
  margin-top : 3em;
}
>nav >ul{
  list-style: none;
  >li, .line{
    display: inline;
    font-size : 1.5em;
    cursor: pointer;
  }
  >li{
    display: relative;
    color :white;
  }
  .line{
    display: absolute;

  }
}

`


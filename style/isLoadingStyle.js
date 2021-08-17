import styled,{keyframes} from 'styled-components'

const loadingCircle = keyframes`
  0%  {border-radius:20% 30% 20% 0;width:50px;height:50px;background: DarkRed;}
	30% {border-radius:0 30% 40% 30%;width:100px;height:100px; background: coral ;}
	60% {border-radius:40% 0 40% 50% ;width:150px;height:150px;background: pink; }
	100% {border-radius:50% 50% 0 50%;width:200px;height:200px; background: lightblue;}
`

export const IsLoadingStyle = styled.div`
width:50px;
height:50px;
background: Crimson ;
margin: 100px auto;
border-radius:50%;
outline: 1px solid transparent;
animation: ${loadingCircle} 2s 1s infinite alternate;	
`
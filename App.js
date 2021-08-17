import React ,{useState}from 'react';
import { GlobalStyle } from './style/mainStyle'
import Main from './pages/Main.js'
import Breed from './pages/Breed'
import Train from './pages/Train'
import InfoShelter from './pages/InfoShelter'
import Community from './pages/Community'

const App = () => {

  const [showSignup , setShowSignup] = useState(false)

  const make_main_smaller = () => {
    console.log(showSignup)
    setShowSignup((prev)=>!prev);
  }
  return (
    <>
      <GlobalStyle />
        <Main make_main_smaller = {make_main_smaller} showSignup  = {showSignup}/>
        <Breed />
        <Train />
        <InfoShelter />
        <Community />
    </>
  )
}

export default App;
import React, { useState } from 'react'
import {HeaderStyle} from '../style/mainStyle'

const Headers = () => {
  return <HeaderStyle>
    <nav>
      <ul>
        <li>Learn dogs<div className = 'line'></div></li>
        <li>How to train <div className = 'line'></div></li>
        <li>Shelter <div className = 'line'></div></li>
        <li>Community <div className = 'line'></div></li>
      </ul>
    </nav>
    </HeaderStyle>
}

export default Headers;
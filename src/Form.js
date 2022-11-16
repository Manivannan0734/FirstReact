import React from 'react'
import './Form.css'
export default function Form() {
  return (
    <div>
        <div id='container' >
            
            <label style={{marginTop:'2.3rem'}}  >ENTER USER NAME: </label><input id='ip1' type="text" name="uname"/>
            <label style={{marginTop:'4.6rem',position:'absolute',marginLeft:'-12%'}} >ENTER PASSWORD:  <input id='ip2' type="password" name="ps"/> </label>
        </div>
    </div>
  )
}

import React from 'react'
import Vert_Nav from '../components/Vert_Nav/Vert_Nav'
import Signed_In_Home from '../components/SignedIn/Signed_In_Home'

function SignedIn(props) {


  return (
    <div>
        <Vert_Nav /> 
        <Signed_In_Home currentToken = {props.currentToken}/>
         
    </div>
  )
}

export default SignedIn
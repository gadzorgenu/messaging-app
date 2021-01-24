import React, { lazy } from 'react'
 
const Network = lazy(()=> import('./Network'))
const Message = lazy(()=> import('./Message'))
const Login = lazy(()=> import('./LoginPage'))
const SignUp = lazy(()=> import('./SignUp'))

const Pages = {
    Message,
    Login,
    Network,
    SignUp
    
}

export default Pages

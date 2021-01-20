import React, { lazy } from 'react'
 
const Network = lazy(()=> import('./Network'))
const Message = lazy(()=> import('./Message'))
const Login = lazy(()=> import('./LoginPage'))
const User = lazy(()=>import('./User'))
const SignUp = lazy(()=> import('./SignUp'))

const Pages = {
    Message,
    Login,
    Network,
    User,
    SignUp
    
}

export default Pages

import React, { Suspense} from 'react'
import { Route, Switch ,Redirect} from 'react-router-dom'
import Pages from './Pages'
const router = () => {
    return (
       <Suspense fallback={<h4>Loading....</h4>}>
           <Switch>
               <Route path='/network' component={Pages.Network} />
               <Route path='/messaging' component={Pages.Message}/>
               <Route path='/login' component={Pages.Login}/>
               <Route path='/signup' component={Pages.SignUp}/>
               <Redirect from='*' to='/login' />
           </Switch>
       </Suspense>
    )
}

export default router

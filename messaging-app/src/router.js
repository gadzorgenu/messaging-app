import React, { Suspense} from 'react'
import { Route, Switch } from 'react-router-dom'
import Pages from './Pages'
const router = () => {
    return (
       <Suspense fallback={<h4>Loading....</h4>}>
           <Switch>
               <Route path='/network' component={Pages.Network} />
               <Route path='/messaging' component={Pages.Message}/>
           </Switch>
       </Suspense>
    )
}

export default router

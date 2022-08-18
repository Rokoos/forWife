import React from 'react'
import { Route, BrowserRouter, Switch} from 'react-router-dom'

import PeriodList from './components/PeriodList'
import AddPeriod from './components/AddPeriod'
import EditAplication from './components/EditAplication'

const App = () => {
  return (
   <div className='container' >
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PeriodList} />
      <Route exact path="/newPeriodDate" component={AddPeriod} />
      <Route exact path="/aplications/edit" component={EditAplication} />
    </Switch>
   </BrowserRouter>
   </div>
  )
}

export default App

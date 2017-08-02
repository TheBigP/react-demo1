import React from 'react'
import {
    HashRouter as Router,
    Route,
} from 'react-router-dom'

import './App.css';

import First from './pages/first'
import Search from './pages/search'
import Tab from './pages/tab'

import BorrowFlow from './pages/borrow/borrow-flow'
import Borrow from './pages/borrow/borrow'
import Serial from './pages/borrow/serial'
import ReturnFlow from './pages/return/return-flow'
import Return from './pages/return/return'

import Scan from './containers/scan'

import Main from './containers/main'
import Todos from './containers/todos'
import Detail from './components/detail'

const App = () => (
  <Router>
    <div className="reactroot">
      <Route exact path="/" component={First}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/borrow_flow" component={BorrowFlow}/>
      <Route exact path="/borrow" component={Borrow}/>
      <Route exact path="/return_flow" component={ReturnFlow}/>
      <Route exact path="/return" component={Return}/>
      <Route exact path="/serial" component={Serial}/>
      <Route exact path="/tab" component={Tab}/>
      <Route path="/scan" component={Scan}/>
      <Route path="/me" component={Main}/>
      <Route path="/todos" component={Todos}/>
      <Route path="/detail/:id" component={Detail}/>
  </div>
  </Router>
)
export default App

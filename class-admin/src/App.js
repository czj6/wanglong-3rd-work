import React, { Component } from 'react'
import './App.css'
import HeadNav from './component/HeadNav/index'
import SideNav from './component/SideNav/index'
import Main from './pages/Main/index'
import MainCreate from './pages/Main-Create/index'
import MainView from './pages/Main-View/index'
import {Route,Switch} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div> 
        <HeadNav/>
        <div className="container body_container">
          <div className="body">
            <SideNav/>
            <Switch>
              <Route path="/class/:id" component={MainView}></Route>
              <Route path="/create" component={MainCreate}></Route>
              <Route path="/" component={Main}></Route>
            </Switch>
            
          </div>
        </div>
      </div>
    )
  }
}

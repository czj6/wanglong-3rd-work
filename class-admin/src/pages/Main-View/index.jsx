import React, { Component } from 'react'
import './index.css'
import MVList from '../Main-View-List/index'
import { NavLink, Route ,Switch} from 'react-router-dom'
import axios from 'axios'
export default class MainView extends Component {
  state = {class: {},teachers:[],students:[],parents:[]}
  myIpt = React.createRef();
  goback = ()=>{
    this.props.history.goBack()
  }
  async UNSAFE_componentWillMount() {
    let arr
    let id = this.props.match.params.id;
    await axios({
      method: 'get',
      url: `http://localhost:3000/api1/class/${id}`
    }).then((data)=>{
      arr = data.data
    })
    this.setState(
      {
        class: arr,
        teachers: arr.teachers,
        students: arr.students,
        parents: arr.parents
      })
  }
  search = ()=>{
    let {value} = this.myIpt.current
    let person = [],temp=[],reg = new RegExp(`[${value}]`)
    let {id} = this.props.match.params;
    temp = this.state.teachers.filter((item)=>{
      return reg.test(item.name)
    })
    person = [...person,...temp]
    temp = this.state.students.filter((item)=>{
      return reg.test(item.name)
    })
    person = [...person,...temp]
    temp = this.state.parents.filter((item)=>{
      return reg.test(item.name)
    })
    person = [...person,...temp]
    this.props.history.push(`/class/${id}/search`,{person})
  }
  render() {
    let {id} = this.props.match.params;
     let {students , teachers , parents} = this.state
    return (
      <div className="main">
        <div className="main_head">
          <p>我的班级</p>
          <button className="btn btn-primary create_btn" onClick={this.goback}>返回上一级</button>
        </div>
        <div className="main_content">
          <div className="main_content_head">
            <div></div>
            <p className="title">折纸兴趣班</p>
            <div className="search">
              <input type="text" placeholder="请输入" className="search_ipt" ref={this.myIpt}/>
              <div className="search_btn" onClick={this.search}>
                <i className="fa fa-search search_icon" aria-hidden="true"></i>  
              </div>
            </div>
          </div>
          <div className="main_content_body">
            <div className="main_content_body_head">
              <NavLink activeClassName="active" className="nav" to={{pathname:`/class/${id}/teachers`,state:{person:teachers}}} >所有老师({teachers.length})</NavLink>
              <NavLink activeClassName="active" className="nav" to={{pathname:`/class/${id}/students`,state:{person:students}}}>所有学生({students.length})</NavLink>
              <NavLink activeClassName="active" className="nav" to={{pathname:`/class/${id}/parents`,state:{person:parents}}}>所有家长({parents.length})</NavLink>
            </div>
            <Switch>
              <Route path="/class/:id/teachers" component={MVList}></Route>
              <Route path="/class/:id/students" component={MVList}></Route>
              <Route path="/class/:id/parents" component={MVList}></Route>
              <Route path="/class/:id/search" component={MVList}></Route>
            </Switch>
            
          </div>
        </div>
      </div>
    )
  }
}

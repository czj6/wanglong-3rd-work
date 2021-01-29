import React, { Component } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import List from '../../component/List/index'
import axios from 'axios'

export default class Main extends Component {
  state = {class1:[],class2:[]}
  async UNSAFE_componentWillMount() {
    let arr = []
    await axios({
      method: 'get',
      url: "http://localhost:3000/api1/class"
    }).then((data)=>{
      arr = data.data
      
    }).catch(function(error){
      console.log(error);
    })
    let class1 = arr.filter((item)=>{
      return item.type === "1"
    })
    let class2 = arr.filter((item)=>{
      return item.type === "2"
    })
    this.setState({class1,class2})
  }
  render() {
    return (
      <div className="main">
        <div className="main_head">
            <p>我的班级</p>
            <Link className="btn btn-primary create_btn" to="/create" >创建班级</Link>
        </div>
        <div className="main_content">
          <p>行政班是为学生管理和教学管理而设置的班级</p>
          <List class={this.state.class1}/>
            <p>教学班是根据课程教学要求而设置的班级</p>
          <List class={this.state.class2}/>
        </div>
      </div>
    )
  }
}

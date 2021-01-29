import React, { Component } from 'react'
import './index.css'
import { withRouter } from 'react-router'
class Item extends Component {
  gotoDetail = ()=>{
    this.props.history.push(`/class/${this.props.id}`)
  }

  render() {
    return (
      <div className="card" onClick={this.gotoDetail}>
        <div className="card_img">
          <img src="img/avator.png" alt=""/>
        </div>
        <div className="introduction">
          <p className="senior">高中：<span>2013级</span></p>
          <p className="class">班级：<span>{this.props.grade}</span></p>
          <p className="teacher">班主任：<span>{this.props.classTeacher}</span></p>
          <p className="student">学生：<span>{this.props.students.length}人</span></p>
        </div>
        <div className="label">{this.props.type === '1'?'行政班' : "教学班"}</div>
      </div>
    )
  }
}
export default withRouter(Item)
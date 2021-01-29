import React, { Component } from 'react'
import './index.css'
export default class SideNav extends Component {
  render() {
    return (
      <div className="side">
          <div className="side_head">
            <div>
              <i className="fa fa-arrow-circle-o-left fa-2x back_arrow"></i>
              <span className="side_head_text">个人中心</span>
            </div>
            <i className="fa fa-th-large more_icon" aria-hidden="true"></i>
          </div>
          <div className="side_items">
            <div className="item">
              <i className="fa fa-home" aria-hidden="true"></i>
              <span>其他内容</span>
            </div>
            <div className="item">
              <i className="fa fa-file-text-o" aria-hidden="true"></i>
              <span>其他内容</span>
            </div>
            <div className="item">
              <i className="fa fa-file-o" aria-hidden="true"></i>
              <span>我的班级</span>
            </div>
            <div className="item">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <span>其他内容</span>
            </div>
          </div>
        </div>
    )
  }
}

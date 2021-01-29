import React, { Component } from 'react'
import './index.css'
export default class HeadNav extends Component {
  render() {
    return (
      <div className="container">
        <div className="head">
          <div className="logo_container">
            <img src="/public/img/logo.png" alt="" className="logo"/>
            <span className="logo_name1">福建省教育信息化统一平台</span>
            <span className="logo_name2">网教通</span>
          </div>
          <div className="nav">
            <span>首页</span>
            <span>教学管理</span>
            <span>学习</span>
            <span>资源超市</span>
            <span>教育应用</span>
            <span>新闻</span>
            <span>名师名校</span>
          </div>
          <div className="new_container">
            <img src="img/new.png" alt="" className="new"/>
          </div>
          <div className="search">
            <i className="fa fa-search fa-2x search_icon"></i>
          </div>
          <div className="user">
            <div className="user_icon">
              <img src="/img/user.png" alt=""/>
            </div>
            <span>cc</span>
          </div>
        </div>
      </div>
    )
  }
}

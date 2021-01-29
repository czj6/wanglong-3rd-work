// 这是Main-View-List里的卡片组件
import React, { Component } from 'react'
import './index.css'
export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="photo">
          <div className="tag_box">
            {
              this.props.tags?
              <span className="tag">{this.props.tags}</span>
              : ""
            }
            
          </div>
          <img src="/img/photo.png" alt=""/>       
        </div>
        <div className="name">{this.props.name}</div>
      </div>
    )
  }
}

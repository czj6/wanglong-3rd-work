import React, { Component } from 'react'
import './index.css'
import Item from '../Item/index'

export default class List extends Component {
  render() {
    return (
      <div className="list">
        {
          this.props.class.map((item)=>{
           return <Item key={item.id} {...item}/>
          })
        }
      </div>
    )
  }
}

import React, { Component } from 'react'
import './index.css'
import Card from '../../component/Card/index'
export default class MVList extends Component {
  render() {
    return (
      <div className="main_content_body_list">
        {
          this.props.location.state.person.map((item)=>{
            return <Card key={item.id} {...item}/>
          })
        }
        
      </div>
    )
  }
}

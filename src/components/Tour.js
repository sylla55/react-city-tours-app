import React, { Component } from 'react'
import './Tour.scss'

class Tour extends Component {
    state = {
        showInfo: false
    }

    handleInfo = () =>{
        const showInfo = true
        this.setState({ showInfo })
    }

    render () {
    const { city, id, img, info, name } = this.props.tours
    const {removeTour} = this.props
    return (
      <article className='tour'>
        <div className='img-container'>
          <img
            width='200'
            alt=''
            src={img} />
          <span className='close-btn' onClick={()=>{removeTour(id)}}>
            <i className='fas fa-window-close' />
          </span>
        </div>
        <div className='tour-info'>
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
          info{""} 
          <span onClick={this.handleInfo}>
              <i className='fas fa-caret-square-down' />
          </span>
          {this.state.showInfo && (
           <p>{info}</p>
          )}
          </h5>
        </div>
      </article>
    )
  }
}

export default Tour

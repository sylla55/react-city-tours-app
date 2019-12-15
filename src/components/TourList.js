import React, { Component } from 'react'
import './TourList.scss'
import Tour from '../components/Tour'
import {tourData} from './tourData'

export default class TourList extends Component {
  state = {
      tours: tourData
  }

  removeTour = id => {
    const {tours} = this.state
    const sortedTours = tours.filter((tour) => tour.id !== id)
    this.setState({
        tours:sortedTours
    })
  }

  render () {
    const {tours} = this.state
    console.log(tours)
    return (
      <section className='tourlist'>
          {tours.map(tours=> {
              return <Tour key={tours.id} tours={tours} removeTour={this.removeTour}/>
          })}
      </section>
    )
  }
}

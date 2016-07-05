import React, {Component} from 'react'
import LifeCalendar from '../../index'

class App extends Component {

  render() {
    const data = {
      dob: '01/01/1978',
      lifeExpectancy: 78.74,
      ranges: [
        {start: '01/01/1978', end: '09/01/1993', title: 'Junior School', color: 'papayawhip'},
        {start: '09/01/1985', end: '09/01/1990', title: 'Elementary School', color: 'silver'},
        {start: '09/01/1990', end: '09/01/1993', title: 'Junior School', color: 'aqua'},
        {start: '09/01/1993', end: '09/01/1996', title: 'High School', color: 'brown'},
        {start: '09/01/1996', end: '09/01/2000', title: 'College', color: 'lightgreen'},
        {start: '09/01/2000', end: '05/14/2001', title: 'Internship', color: 'red'},
        {start: '05/14/2001', end: '11/20/2010', title: 'My First Job', color: 'green'},
        {start: '11/20/2010', end: '05/17/2014', title: 'My Second Job', color: 'lightblue'},
        {start: '05/17/2014', title: 'My Current Job', color: 'orange'}
      ],
      milestones: [
        {date: '10/08/2003', title: 'Published first book'},
        {date: '11/15/2013', title: 'Published second book'},
        {date: '01/01/2013', title: 'My Birthday!'}
      ]
    };

    return (
      <LifeCalendar width="500" height="1000" title="Example Life Calendar" data={data}/>
    )
  }
}

export default App;
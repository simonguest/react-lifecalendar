import React, {Component, PropTypes} from 'react'

class LifeTitle extends Component {
  render() {
    const {width, title, color} = this.props;
    return (
      <text textAnchor="middle" x={width / 2} y="15" fontFamily="Verdana, Helvetica, Arial, sans-serif" fontSize="18" style={{fill:color || 'rgb(50,50,50)'}}>
        {title}
      </text>
    )
  }
}

export default LifeTitle;
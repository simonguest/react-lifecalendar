import React, {Component, PropTypes} from 'react'

class LifeCell extends Component {
  render() {
    const {x, y, color, gridColor, title} = this.props;
    const width = 100 / 52;
    const height = 1;

    return (
      <g>
        <title>{title}</title>
        <rect x={x} y={y} width={width + '%'} height={height + '%'} stroke={gridColor || 'rgb(255,255,255)'} fill={color || '#eeeeee'}/>
      </g>
    )
  }
}

export default LifeCell;
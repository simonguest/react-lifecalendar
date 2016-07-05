import React, {Component, PropTypes} from 'react'

class LifeYAxis extends Component {
  render() {
    const {count, color} = this.props;
    const rowCount = Math.ceil(count / 52);

    var rows = Array.apply(null, {length: rowCount}).map(Number.call, Number).map((row) => {
      if (row % 5 == 0) {
        return (
          <text key={row} x="10" y={(row + 1) + '%'} textAnchor="middle" fontFamily="Verdana, Helvetica, Arial, sans-serif" fontSize="14" style={{fill:color || '#aaaaaa'}}>
            {row}
          </text>
        );
      }
    });

    return (
      <g>
        {rows}
      </g>
    )
  }
}

export default LifeYAxis;
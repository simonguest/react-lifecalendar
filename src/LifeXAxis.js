import React, {Component, PropTypes} from 'react'

class LifeXAxis extends Component {
  render() {
    const {color} = this.props;

    const offset = (100/52/2);

    var cols = Array.apply(null, {length: 52}).map(Number.call, Number).map((col) => {
      if (col % 13 == 12 || col == 0 || col == 51) {
        return (
          <text key={col} x={offset + (col * 100/52) + '%'} y="10" textAnchor="middle" fontFamily="Verdana, Helvetica, Arial, sans-serif" fontSize="10" style={{fill:color || '#aaaaaa'}}>
            {col + 1}
          </text>
        );
      }
    });

    return (
      <g>
        {cols}
      </g>
    )
  }
}

export default LifeXAxis;
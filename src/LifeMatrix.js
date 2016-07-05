import React, {Component, PropTypes} from 'react'

import LifeCell from './LifeCell'

class LifeMatrix extends Component {
  render() {
    const {count, ranges} = this.props;
    
    const rowCount = Math.floor(count / 52);

    var getCellDetails = (index) => {
      var color;
      var title = '';
      ranges.map((range) => {
        if (index >= Math.floor(range.start) && index <= Math.ceil(range.end)) {
          color = range.color;
          title = range.title;
        }
      });
      return { color: color, title: title };
    };

    var createRow = (length, row) => {
      return Array.apply(null, {length: length}).map(Number.call, Number).map((n) => {
        var cellIndex = (row * 52) + n;
        var details = getCellDetails(cellIndex);
        return (<LifeCell key={cellIndex} x={(n * 100/52) + '%'} y={row + '%'} color={details.color} title={details.title}/>);
      });
    };

    const rows = Array.apply(null, {length: rowCount}).map(Number.call, Number).map((row) => {
      return createRow(52, row);
    });

    const finalRow = createRow(count % 52, rowCount);

    return (
      <g>
        {rows}
        {finalRow}
      </g>
    )
  }
}

export default LifeMatrix;
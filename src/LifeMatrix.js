import React, {Component, PropTypes} from 'react'

class LifeMatrix extends Component {
  render() {
    const {cells} = this.props;
    const rowCount = Math.floor(cells.length / 52);
    const width = 100 / 52;
    const height = 1;

    var createRow = (length, row) => {
      return Array.apply(null, {length: length}).map(Number.call, Number).map((n) => {
        var cellIndex = (row * 52) + n;
        return (<g key={cellIndex}>
          <rect x={(n * 100 / 52) + '%'} y={row + '%'} width={width + '%'} height={height + '%'} stroke={'rgb(255,255,255)'} fill={cells[cellIndex] ? cells[cellIndex].color : '#eeeeee'} data-tip={cells[cellIndex] ? cells[cellIndex].title : ''}/>
        </g>);
      });
    };

    const rows = Array.apply(null, {length: rowCount}).map(Number.call, Number).map((row) => {
      return createRow(52, row);
    });
    const finalRow = createRow(cells.length % 52, rowCount);

    return (
      <g>
        {rows}
        {finalRow}
      </g>
    )
  }
}

export default LifeMatrix;
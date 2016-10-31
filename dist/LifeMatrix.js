'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LifeMatrix = function (_Component) {
  _inherits(LifeMatrix, _Component);

  function LifeMatrix() {
    _classCallCheck(this, LifeMatrix);

    return _possibleConstructorReturn(this, (LifeMatrix.__proto__ || Object.getPrototypeOf(LifeMatrix)).apply(this, arguments));
  }

  _createClass(LifeMatrix, [{
    key: 'render',
    value: function render() {
      var cells = this.props.cells;

      var rowCount = Math.floor(cells.length / 52);
      var width = 100 / 52;
      var height = 1;

      var createRow = function createRow(length, row) {
        return Array.apply(null, { length: length }).map(Number.call, Number).map(function (n) {
          var cellIndex = row * 52 + n;
          return _react2.default.createElement(
            'g',
            { key: cellIndex },
            _react2.default.createElement(
              'title',
              null,
              cells[cellIndex] ? cells[cellIndex].title : ''
            ),
            _react2.default.createElement('rect', { x: n * 100 / 52 + '%', y: row + '%', width: width + '%', height: height + '%', stroke: 'rgb(255,255,255)', fill: cells[cellIndex] ? cells[cellIndex].color : '#eeeeee' })
          );
        });
      };

      var rows = Array.apply(null, { length: rowCount }).map(Number.call, Number).map(function (row) {
        return createRow(52, row);
      });
      var finalRow = createRow(cells.length % 52, rowCount);

      return _react2.default.createElement(
        'g',
        null,
        rows,
        finalRow
      );
    }
  }]);

  return LifeMatrix;
}(_react.Component);

exports.default = LifeMatrix;
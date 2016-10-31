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

var LifeYAxis = function (_Component) {
  _inherits(LifeYAxis, _Component);

  function LifeYAxis() {
    _classCallCheck(this, LifeYAxis);

    return _possibleConstructorReturn(this, (LifeYAxis.__proto__ || Object.getPrototypeOf(LifeYAxis)).apply(this, arguments));
  }

  _createClass(LifeYAxis, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var count = _props.count;
      var color = _props.color;

      var rowCount = Math.ceil(count / 52);

      var rows = Array.apply(null, { length: rowCount }).map(Number.call, Number).map(function (row) {
        if (row % 5 == 0) {
          return _react2.default.createElement(
            'text',
            { key: row, x: '10', y: row + 1 + '%', textAnchor: 'middle', fontFamily: 'Verdana, Helvetica, Arial, sans-serif', fontSize: '14', style: { fill: color || '#aaaaaa' } },
            row
          );
        }
      });

      return _react2.default.createElement(
        'g',
        null,
        rows
      );
    }
  }]);

  return LifeYAxis;
}(_react.Component);

exports.default = LifeYAxis;
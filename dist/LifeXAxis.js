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

var LifeXAxis = function (_Component) {
  _inherits(LifeXAxis, _Component);

  function LifeXAxis() {
    _classCallCheck(this, LifeXAxis);

    return _possibleConstructorReturn(this, (LifeXAxis.__proto__ || Object.getPrototypeOf(LifeXAxis)).apply(this, arguments));
  }

  _createClass(LifeXAxis, [{
    key: 'render',
    value: function render() {
      var color = this.props.color;

      var offset = 100 / 52 / 2;

      var cols = Array.apply(null, { length: 52 }).map(Number.call, Number).map(function (col) {
        if (col % 13 == 12 || col == 0 || col == 51) {
          return _react2.default.createElement(
            'text',
            { key: col, x: offset + col * 100 / 52 + '%', y: '10', textAnchor: 'middle', fontFamily: 'Verdana, Helvetica, Arial, sans-serif', fontSize: '10', style: { fill: color || '#aaaaaa' } },
            col + 1
          );
        }
      });

      return _react2.default.createElement(
        'g',
        null,
        cols
      );
    }
  }]);

  return LifeXAxis;
}(_react.Component);

exports.default = LifeXAxis;
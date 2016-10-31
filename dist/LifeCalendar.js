'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _LifeMatrix = require('./LifeMatrix');

var _LifeMatrix2 = _interopRequireDefault(_LifeMatrix);

var _LifeTitle = require('./LifeTitle');

var _LifeTitle2 = _interopRequireDefault(_LifeTitle);

var _LifeYAxis = require('./LifeYAxis');

var _LifeYAxis2 = _interopRequireDefault(_LifeYAxis);

var _LifeXAxis = require('./LifeXAxis');

var _LifeXAxis2 = _interopRequireDefault(_LifeXAxis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LifeCalendar = function (_Component) {
  _inherits(LifeCalendar, _Component);

  function LifeCalendar() {
    _classCallCheck(this, LifeCalendar);

    return _possibleConstructorReturn(this, (LifeCalendar.__proto__ || Object.getPrototypeOf(LifeCalendar)).apply(this, arguments));
  }

  _createClass(LifeCalendar, [{
    key: 'getWeekRange',
    value: function getWeekRange(dob, start, end) {
      var offsetStart = _moment2.default.duration(start.diff(dob)).asYears() * 52;
      var offsetEnd = offsetStart + _moment2.default.duration(end.diff(start)).asYears() * 52;
      return { start: Math.ceil(offsetStart - 1 / 2), end: Math.ceil(offsetEnd - 1 / 2) };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var width = _props.width;
      var height = _props.height;
      var title = _props.title;
      var data = _props.data;

      if (data.dob === undefined || data.lifeExpectancy === undefined) {
        console.error('Please supply both the dob and lifeExpectancy values in the data to the calendar');
        return _react2.default.createElement(
          'p',
          null,
          'Error rendering calendar - please check console'
        );
      }

      var dateFormat = data.dateFormat || 'MM/DD/YYYY';
      var cells = new Array(Math.ceil(data.lifeExpectancy * 52));

      data.ranges.map(function (range) {
        var offset = _this2.getWeekRange((0, _moment2.default)(data.dob, dateFormat), (0, _moment2.default)(range.start, dateFormat), (0, _moment2.default)(range.end || (0, _moment2.default)().format(dateFormat), dateFormat));
        for (var f = offset.start; f <= offset.end; f++) {
          cells[f] = { title: range.title, color: range.color };
        }
      });

      data.milestones.map(function (milestone) {
        var offset = _this2.getWeekRange((0, _moment2.default)(data.dob, dateFormat), (0, _moment2.default)(milestone.date, dateFormat), (0, _moment2.default)(milestone.date, dateFormat));
        cells[offset.start] = { title: milestone.title, color: milestone.color || 'black' };
      });

      var currentOffset = this.getWeekRange((0, _moment2.default)(data.dob, dateFormat), (0, _moment2.default)(), (0, _moment2.default)());
      cells[currentOffset.start] = { title: 'Current Week!', color: 'darkblue' };

      var svgWidth = parseInt(width) || 500;
      var svgHeight = parseInt(height) || 1000;
      var margin = 30;

      return _react2.default.createElement(
        'svg',
        { height: svgHeight, width: svgWidth + margin },
        _react2.default.createElement(
          'svg',
          { x: margin, y: '0', width: svgWidth - margin },
          _react2.default.createElement(_LifeTitle2.default, { width: svgWidth - margin, title: title || 'Life Calendar' })
        ),
        _react2.default.createElement(
          'svg',
          { x: '0', y: margin + 10 },
          _react2.default.createElement(_LifeYAxis2.default, { count: cells.length })
        ),
        _react2.default.createElement(
          'svg',
          { x: margin, y: 25, width: svgWidth - margin },
          _react2.default.createElement(_LifeXAxis2.default, null)
        ),
        _react2.default.createElement(
          'svg',
          { x: margin, y: margin + 10, width: svgWidth - margin },
          _react2.default.createElement(_LifeMatrix2.default, { cells: cells })
        )
      );
    }
  }]);

  return LifeCalendar;
}(_react.Component);

exports.default = LifeCalendar;
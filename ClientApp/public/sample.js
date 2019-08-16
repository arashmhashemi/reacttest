'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tableStyle = {
    marginTop: '10px',
    border: 'solid 1px #DDEEEE',
    borderCollapse: 'collapse',
    borderSpacing: '0',
    font: 'normal 13px Arial, sans - serif'
};

var thStyle = {
    backgroundColor: '#DDEFEF',
    border: 'solid 1px #DDEEEE',
    color: '#336B6B',
    padding: '10px',
    textAlign: 'left',
    textShadow: '1px 1px 1px #fff'
};

var tdStyle = {
    border: 'solid 1px #DDEEEE',
    color: '#333',
    padding: '10px',
    textShadow: '1px 1px 1px #fff'
};

var Sample = function (_React$Component) {
    _inherits(Sample, _React$Component);

    function Sample(props) {
        _classCallCheck(this, Sample);

        var _this = _possibleConstructorReturn(this, (Sample.__proto__ || Object.getPrototypeOf(Sample)).call(this, props));

        _this.state = { size: 10 };
        return _this;
    }

    _createClass(Sample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var rows = [];

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: function onClick() {
                            fetch('https://dfreact.azurewebsites.net/api/SampleData/WeatherForecasts').then(function (response) {
                                return response.json();
                            }).then(function (data) {
                                for (var i = 0; i < data.length; i++) {
                                    var cells = [];
                                    cells.push(React.createElement(
                                        'td',
                                        { key: 'cell' + i + '-1', style: tdStyle },
                                        data[i].dateFormatted
                                    ));
                                    cells.push(React.createElement(
                                        'td',
                                        { key: 'cell' + i + '-1', style: tdStyle },
                                        data[i].temperatureC
                                    ));
                                    cells.push(React.createElement(
                                        'td',
                                        { key: 'cell' + i + '-1', style: tdStyle },
                                        data[i].summary
                                    ));
                                    cells.push(React.createElement(
                                        'td',
                                        { key: 'cell' + i + '-1', style: tdStyle },
                                        data[i].temperatureF
                                    ));

                                    rows.push(React.createElement(
                                        'tr',
                                        { key: 'row' + i },
                                        cells
                                    ));
                                }

                                _this2.setState({ forcasts: rows, loading: false });
                            });
                        } },
                    'Click to Load Data'
                ),
                React.createElement(
                    'table',
                    { style: tableStyle },
                    React.createElement(
                        'thead',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'th',
                                { style: thStyle },
                                'Date Formatted'
                            ),
                            React.createElement(
                                'th',
                                { style: thStyle },
                                'Temperature (C)'
                            ),
                            React.createElement(
                                'th',
                                { style: thStyle },
                                'Temperature (F)'
                            ),
                            React.createElement(
                                'th',
                                { style: thStyle },
                                'Summary'
                            )
                        )
                    ),
                    React.createElement(
                        'tbody',
                        null,
                        this.state.forcasts
                    )
                )
            );
        }
    }]);

    return Sample;
}(React.Component);

var domContainer = document.querySelector('#react-app');
ReactDOM.render(React.createElement(Sample, null), domContainer);
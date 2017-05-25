"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
    "use strict";

    var RainyStatus = function (_React$Component) {
        _inherits(RainyStatus, _React$Component);

        function RainyStatus(props) {
            _classCallCheck(this, RainyStatus);

            var _this = _possibleConstructorReturn(this, (RainyStatus.__proto__ || Object.getPrototypeOf(RainyStatus)).call(this, props));

            _this.state = {
                weather: 1,
                name: props.name
            };

            // This binding is necessary to make `this` work in the callback
            _this.handleClearClick = _this.handleClearClick.bind(_this);
            _this.handleRainyClick = _this.handleRainyClick.bind(_this);
            return _this;
        }

        _createClass(RainyStatus, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                console.log(this);
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                console.log(this);
            }
        }, {
            key: "handleClearClick",
            value: function handleClearClick(e) {
                this.setState({ weather: 1 });
            }
        }, {
            key: "handleRainyClick",
            value: function handleRainyClick(e) {
                this.setState({ weather: 4 });
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "wrapper" },
                    React.createElement("div", { className: "sub clear", "data-selected": this.state.weather == 1, onClick: this.handleClearClick }),
                    React.createElement("div", { className: "sub rainy", "data-selected": this.state.weather == 4, onClick: this.handleRainyClick }),
                    React.createElement("input", { type: "hidden", value: this.state.weather, name: this.state.name })
                );
            }
        }]);

        return RainyStatus;
    }(React.Component);

    var element = React.createElement(RainyStatus, { name: "test123" });
    ReactDOM.render(element, document.getElementById("root"));
})();
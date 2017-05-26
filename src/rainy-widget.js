// https://codeutopia.net/blog/2016/01/25/getting-started-with-npm-and-browserify-in-a-react-project/
// http://browserify.org/
// https://facebook.github.io/react/docs/installation.html
(function(){
    "use strict";

    var ReactDOM = require('react-dom');
    var React = require('react');

    class RainyStatus extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                weather: 1,
                name: props.name,
                label: props.label
            };

            // This binding is necessary to make `this` work in the callback
            this.handleClearClick = this.handleClearClick.bind(this);
            this.handleRainyClick = this.handleRainyClick.bind(this);
        }

        componentDidMount() {
            //console.log(this);
        }

        componentWillUnmount() {
            //console.log(this);
        }

        handleClearClick(e){
            this.setState({ weather: 1 });
        }

        handleRainyClick(e){
            this.setState({ weather: 4 });
        }

        render() {
            return (
                <div className="wrapper" >
                    <div className="label" data-weather={this.state.weather}>{this.state.label}</div>
                    <div className="sub clear" data-selected={this.state.weather == 1} onClick={this.handleClearClick} ></div>
                    <div className="sub rainy" data-selected={this.state.weather == 4} onClick={this.handleRainyClick}></div>
                    <input type="hidden" value={this.state.weather} name={this.state.name} />
                </div>
            );
        };
    }

    class RainyWidget extends React.Component {
        render () {
            return (
                <div>
                    <RainyStatus name="status7" label="7am" />
                    <RainyStatus name="status8" label="8am" />
                    <RainyStatus name="status9" label="9am" />
                    <RainyStatus name="status10" label="10am" />
                    <RainyStatus name="status11" label="11am" />
                    <RainyStatus name="status12" label="12noon" />
                    <RainyStatus name="status13" label="1pm" />
                    <RainyStatus name="status14" label="2pm" />
                    <RainyStatus name="status15" label="3pm" />
                    <RainyStatus name="status16" label="4pm" />
                    <RainyStatus name="status17" label="5pm" />
                    <RainyStatus name="status18" label="6pm" />
                    <RainyStatus name="status19" label="7pm" />
                    <RainyStatus name="status20" label="8pm" />
                    <RainyStatus name="status21" label="9pm" />
                    <RainyStatus name="status22" label="10pm" />
                    <RainyStatus name="status23" label="11pm" />
                    <RainyStatus name="status24" label="12pm" />
                </div>
            );
        }
    }

    if ( document.getElementById("rainy-widget") ) {
        const element = <RainyWidget />;
        ReactDOM.render(element, document.getElementById("rainy-widget"));
    }
    
})();
// https://codeutopia.net/blog/2016/01/25/getting-started-with-npm-and-browserify-in-a-react-project/
// http://browserify.org/
// https://facebook.github.io/react/docs/installation.html
// weather: 1 => clear
//          4 => rainy
(function(){
    "use strict";

    var ReactDOM = require('react-dom');
    var React = require('react');

    class RainyStatus extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                weather: props.value || 1,
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
            const weather = this.state.weather;
            return (
                <div className="wrapper" >
                    <div className="label" data-weather={weather}>{this.state.label}</div>
                    <div className="sub clear" data-selected={weather == 1} onClick={this.handleClearClick} ></div>
                    <div className="sub rainy" data-selected={weather == 4} onClick={this.handleRainyClick}></div>
                    <input type="hidden" value={weather} name={this.state.name} />
                </div>
            );
        };
    }

    class RainyWidget extends React.Component {
        render () {
            return (
                <div className="rainy-widget">
                    <RainyStatus name="status7" label="7 a.m." value={this.props.data.status7} />
                    <RainyStatus name="status8" label="8 a.m." value={this.props.data.status8} />
                    <RainyStatus name="status9" label="9 a.m." value={this.props.data.status9} />
                    <RainyStatus name="status10" label="10 a.m." value={this.props.data.status10} />
                    <RainyStatus name="status11" label="11 a.m." value={this.props.data.status11} />
                    <RainyStatus name="status12" label="12 p.m." value={this.props.data.status12} />
                    <RainyStatus name="status13" label="1 p.m." value={this.props.data.status13} />
                    <RainyStatus name="status14" label="2 p.m." value={this.props.data.status14} />
                    <RainyStatus name="status15" label="3 p.m." value={this.props.data.status15} />
                    <RainyStatus name="status16" label="4 p.m." value={this.props.data.status16} />
                    <RainyStatus name="status17" label="5 p.m." value={this.props.data.status17} />
                    <RainyStatus name="status18" label="6 p.m." value={this.props.data.status18} />
                    <RainyStatus name="status19" label="7 p.m." value={this.props.data.status19} />
                    <RainyStatus name="status20" label="8 p.m." value={this.props.data.status20} />
                    <RainyStatus name="status21" label="9 p.m." value={this.props.data.status21} />
                    <RainyStatus name="status22" label="10 p.m." value={this.props.data.status22} />
                    <RainyStatus name="status23" label="11 p.m." value={this.props.data.status23} />
                    <RainyStatus name="status24" label="12 a.m." value={this.props.data.status24} />
                </div>
            );
        }
    }

    window.RainyWidget = {
        render: function(elid, data){
            const element = <RainyWidget data={data} />;
            ReactDOM.render(element, document.getElementById(elid));
        }
    };
    
})();
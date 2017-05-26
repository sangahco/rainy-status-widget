(function(){
    "use strict";

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
                    <RainyStatus name="status1" label="7am" />
                    <RainyStatus name="status2" label="8am" />
                    <RainyStatus name="status3" label="9am" />
                    <RainyStatus name="status4" label="10am" />
                    <RainyStatus name="status5" label="11am" />
                    <RainyStatus name="status6" label="12noon" />
                    <RainyStatus name="status7" label="1pm" />
                    <RainyStatus name="status8" label="2pm" />
                    <RainyStatus name="status9" label="3pm" />
                    <RainyStatus name="status10" label="4pm" />
                    <RainyStatus name="status11" label="5pm" />
                    <RainyStatus name="status12" label="6pm" />
                </div>
            );
        }
    }

    const element = <RainyWidget />;
    ReactDOM.render(element, document.getElementById("rainy-widget"));
    
})();
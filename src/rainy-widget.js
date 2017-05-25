(function(){
    "use strict";

    class RainyStatus extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                weather: 1,
                name: props.name
            };

            // This binding is necessary to make `this` work in the callback
            this.handleClearClick = this.handleClearClick.bind(this);
            this.handleRainyClick = this.handleRainyClick.bind(this);
        }

        componentDidMount() {
            console.log(this);
        }

        componentWillUnmount() {
            console.log(this);
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
                    <RainyStatus name="status1" />
                    <RainyStatus name="status2" />
                    <RainyStatus name="status3" />
                    <RainyStatus name="status4" />
                    <RainyStatus name="status5" />
                </div>
            );
        }
    }

    const element = <RainyWidget />;
    ReactDOM.render(element, document.getElementById("root"));
    
})();
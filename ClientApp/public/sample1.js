'use strict';

const e = React.createElement;

class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        return e(
            'button',
            {
                onClick: () => {
                    fetch('api/SampleData/WeatherForecasts')
                        .then(response => response.json())
                        .then(data => {
                            this.setState({ forecasts: data, loading: false });
                        });
                }
            },
            'Click to Load Data'
        );
    }
}

const domContainer = document.querySelector('#react-app');
ReactDOM.render(e(Sample), domContainer);
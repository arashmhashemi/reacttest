'use strict';

const tableStyle = {
    marginTop: '10px',
    border: 'solid 1px #DDEEEE',
    borderCollapse: 'collapse',
    borderSpacing: '0',
    font: 'normal 13px Arial, sans - serif'
}

const thStyle = {
    backgroundColor: '#DDEFEF',
    border: 'solid 1px #DDEEEE',
    color: '#336B6B',
    padding: '10px',
    textAlign: 'left',
    textShadow: '1px 1px 1px #fff'
}

const tdStyle = {
    border: 'solid 1px #DDEEEE',
    color: '#333',
    padding: '10px',
    textShadow: '1px 1px 1px #fff'
}

class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { size: 10 };
    }

    render() {
        let rows = [];
        
        return (
            <div>
                <button onClick={() => {
                    fetch('https://dfreact.azurewebsites.net/api/SampleData/WeatherForecasts')
                        .then(response => response.json())
                        .then(data => {
                            for (var i = 0; i < data.length; i++) {
                                let cells = []
                                cells.push(<td key={`cell${i}-1`} style={tdStyle}>{data[i].dateFormatted}</td>)
                                cells.push(<td key={`cell${i}-1`} style={tdStyle}>{data[i].temperatureC}</td>)
                                cells.push(<td key={`cell${i}-1`} style={tdStyle}>{data[i].summary}</td>)
                                cells.push(<td key={`cell${i}-1`} style={tdStyle}>{data[i].temperatureF}</td>)
                                
                                rows.push(<tr key={`row${i}`}>{cells}</tr>)
                            }

                            this.setState({ forcasts: rows, loading: false });
                        });
                }}>
                    Click to Load Data
                </button>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Date Formatted</th>
                            <th style={thStyle}>Temperature (C)</th>
                            <th style={thStyle}>Temperature (F)</th>
                            <th style={thStyle}>Summary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.forcasts}
                    </tbody>
                </table>


            </div>
        );
    }
}

let domContainer = document.querySelector('#react-app');
ReactDOM.render(<Sample />, domContainer);
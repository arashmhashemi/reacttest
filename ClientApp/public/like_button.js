'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return e(
                'button',
                { onClick: () => this.setState({ liked: false }) },
                'Un Click'
            );
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Click'
        );
    }
}

const domContainer = document.querySelector('#react-app');
ReactDOM.render(e(LikeButton), domContainer);
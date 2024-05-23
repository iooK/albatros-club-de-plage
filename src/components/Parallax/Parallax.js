import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class Parallax extends Component {
    static propTypes = {
        'backgroundImage': PropTypes.string,
        'children': PropTypes.node,
    };

    render() {
        const styles = {
            'backgroundImage': 'url(' + this.props.backgroundImage + ')',
        };

        return (
            <header style={styles} className="parallax">
                <span>{this.props.children}</span>
            </header>
        );
    }
}

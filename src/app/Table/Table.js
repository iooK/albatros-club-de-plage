import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {Table as BootstrapTable} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class TableCol extends Component {
    static propTypes = {
        'isHeader': PropTypes.bool,
        'isObject': PropTypes.bool,
        'col': PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
        ]),
    };

    static getString(string) {
        const beginString = string.substr(0, 3);
        const endString = string.substr(3);

        return <span>{beginString}<small>{endString}</small></span>;
    }

    render() {
        if (this.props.isHeader === true) {
            if (this.props.isObject === true) {
                return <th>{TableCol.getString(this.props.col.from)} <FontAwesome name="arrow-right" /> {TableCol.getString(this.props.col.to)}</th>;
            }

            return <th>{this.props.col}</th>;
        }

        if (this.props.isObject === true) {
            return <td>{TableCol.getString(this.props.col.from)} <FontAwesome name="arrow-right" /> {TableCol.getString(this.props.col.to)}</td>;
        }

        return <td>{this.props.col}</td>;
    }
}

class TableRow extends Component {
    static propTypes = {
        'isHeader': PropTypes.bool,
        'row': PropTypes.array,
        'withColHeader': PropTypes.bool,
    };

    static defaultProps = {
        'isHeader': false,
        'withColHeader': false,
    };

    render() {
        const row = [];
        this.props.row.forEach((col, index) => {
            let isHeader = this.props.isHeader || (index === 0 && this.props.withColHeader);

            row.push(<TableCol col={col} isHeader={isHeader} isObject={typeof col === 'object'} key={index} />);
        });

        return <tr>{row}</tr>;
    }
}

export default class Table extends Component {
    static propTypes = {
        'data': PropTypes.array,
        'withColHeader': PropTypes.bool,
        'withRowHeader': PropTypes.bool,
    };

    static defaultProps = {
        'withColHeader': false,
        'withRowHeader': false,
    };

    render() {
        const body = [];
        const header = [];

        if (this.props.data.length === 0) {
            return <span />;
        }

        this.props.data.forEach((row, index) => {
            if (index === 0 && this.props.withRowHeader === true) {
                header.push(<TableRow key={index} row={row} isHeader={true} />);

                return;
            }

            body.push(<TableRow key={index} row={row} withColHeader={this.props.withColHeader} />);
        });

        return (
            <BootstrapTable responsive striped hover className="table-calendar text-center">
                <thead className={this.props.withRowHeader === true ? 'table-with-header' : ''}>{header}</thead>
                <tbody>{body}</tbody>
            </BootstrapTable>
        );
    }
}

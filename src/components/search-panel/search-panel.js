import React, { Component } from 'react';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        serachLine: ''
    }

    onInputChange = (event) => {
        const term = event.target.value;
        this.setState({ serachLine: term });
        this.props.onSearch(term);
    }

    render() {
        const { onFiler } = this.props;

        return (
            <div className="search-panel">
                <input
                    className="search-line"
                    placeholder="type to search"
                    onChange={this.onInputChange}
                    value={this.state.serachLine} />
                <ItemStatusFilter
                    onFilter={onFiler} />
            </div>
        );
    }
}
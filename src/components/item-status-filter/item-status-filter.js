import React, { Component } from "react";

import './item-status-filter.css'

export default class ItemStatusFilter extends Component {

    filterProps = [
        {
            id: 1,
            label: 'All',
            className: 'status-filter-btn',
            filter: 0
        },
        {
            id: 2,
            label: 'Active',
            className: 'status-filter-btn',
            filter: 1
        },
        {
            id: 3,
            label: 'Done',
            className: 'status-filter-btn',
            filter: 2
        }
    ];

    state = {
        currentFilter: 0
    }

    onFilterChange = (newFilter) => {
        this.setState({ currentFilter: newFilter });
        this.props.onFilter(newFilter);
    }

    render() {
        const { currentFilter } = this.state;

        const buttons = this.filterProps.map(({ id, className, label, filter }) => {
            const filterClass = filter === currentFilter ? 'status-filter-btn--active' : '';
            return (
                <button
                    key={id}
                    className={`${className} ${filterClass}`}
                    onClick={() => this.onFilterChange(filter)}>
                    {label}
                </button>
            );
        });

        return (
            <div className="item-status-filter">
                {[...buttons]}
            </div>
        );
    }

}
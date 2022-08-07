import React, { Component } from "react";

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        taskName: ''
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAppend(this.state.taskName);
        this.setState({ taskName: '' });
    }

    onInputChange = (event) => {
        this.setState({
            taskName: event.target.value
        });
    }

    render() {
        return (
            <form className="item-add-form" onSubmit={this.onSubmit}>
                <input type="text"
                    className="line-to-add"
                    onChange={this.onInputChange}
                    placeholder="What needs to be done?"
                    value={this.state.taskName} />
                <button className="button-to-add">Add</button>
            </form>
        );
    }
};

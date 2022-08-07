import React, { Component } from "react";

import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const { label, onDeleted,
            onToggleDone, onToggleImportant,
            done, important } = this.props;

        const classDone = done ? 'todo-list-item--done' : '';
        const classImportant = important ? 'todo-list-item--important' : '';
        let classNames = `${classDone} ${classImportant}`;

        return (
            <span className="todo-list-item">
                <span className={classNames} onClick={onToggleDone}>{label}</span>
                <div className="todo-list-item__buttons">
                    <button className="todo-list-item__btn todo-list-item__excl-icon"
                        onClick={onToggleImportant}></button>
                    <button className="todo-list-item__btn todo-list-item__trash-icon"
                        onClick={onDeleted}></button>
                </div>
            </span>
        );
    }

}
import React, { Component } from "react";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component {

  todoId = 0;

  state = {
    // Default tasks
    todoData: [
      this.createTodoElement("Drink coffee"),
      this.createTodoElement("Make awesome app"),
      this.createTodoElement("Have a lunch")
    ],
    filter: 0, // 0 - all, 1 - active, 2 - done
    searchLine: ''
  }

  createTodoElement(label) {
    return {
      id: this.todoId++,
      label: label,
      important: false,
      done: false
    }
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((element) => element.id === id);
      const newArray = [...todoData.slice(0, index), ...todoData.slice(index + 1)];

      return {
        todoData: newArray
      };
    });
  };

  addItem = (text) => {
    this.setState(({ todoData }) => {

      const newItem = this.createTodoElement(text);
      const newArray = [...todoData, newItem];

      return {
        todoData: newArray
      }
    });
  }

  searchItems = (text) => {
    this.setState({ searchLine: text });
  }

  filterItems = (filterValue) => {
    this.setState({ filter: filterValue });
  }

  search = (items, searchLine) => {

    if (searchLine.length === 0) {
      return items;
    }

    const visibleItems = items.filter((item) => {
      return item.label.toLowerCase().includes(searchLine.toLowerCase());
    });

    return visibleItems;
  }

  filter = (items, filter) => {

    switch (filter) {
      case 0:
        return items;
      case 1:
        return items.filter((item) => !item.done);
      case 2:
        return items.filter((item) => item.done);
      default:
        return items;
    }

  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.updateTodoItemProperty(todoData, id, 'done')
      }
    });
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.updateTodoItemProperty(todoData, id, 'important')
      };
    });
  }

  updateTodoItemProperty(array, id, propName) {
    const index = array.findIndex((element) => element.id === id);
    const oldItem = array[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [
      ...array.slice(0, index),
      newItem,
      ...array.slice(index + 1)];
  }

  render() {
    const { todoData, searchLine, filter } = this.state;
    let visibleItems = this.search(todoData, searchLine);
    visibleItems = this.filter(visibleItems, filter);

    const alreadyDone = todoData.filter((item) => item.done).length;
    const needToDo = todoData.length - alreadyDone;

    return (
      <div>
        <AppHeader toDo={needToDo} done={alreadyDone} />
        <SearchPanel
          onSearch={this.searchItems}
          onFiler={this.filterItems} />
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant} />
        <ItemAddForm onAppend={this.addItem} />
      </div>
    );
  }
}
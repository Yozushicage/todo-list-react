import React from "react";

import './app-header.css';

const AppHeader = ({ toDo, done }) => {
    return (
        <div className="app-header app-header__display">
            <h1 className="first-header">Todo List</h1>
            <h2 className="second-header">{toDo} more to do, {done} done</h2>
        </div>
    );
};

export default AppHeader;
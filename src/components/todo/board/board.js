import React from "react";
import Task from "../task/task";

import "./board.css"

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            taskCounter: 0,
        };
    }

    handleCheck(id) {
        let tasks = this.state.tasks
        let task = tasks[id]
        task.complete = !task.complete
        tasks[id] = task
        this.setState({tasks: tasks})
    }

    setTasks(count) {
        let res;
        for (let i = 0; i < count; i++) {
            let task = this.state.tasks[i]
            if (task.complete) {
                continue;
            }
            res += this.renderTask(task.complete, task.description)
        }
        return res;
    }

    setComplete(count) {
        let res;
        for (let i = 0; i < count; i++) {
            let task = this.state.tasks[i]
            if (!task.complete) {
                continue;
            }
            res += this.renderTask(i, task.complete, task.description)
        }
        return res;
    }

    renderTask(id, ok, desc) {
        return <Task id={id} complete={ok} description={desc} onclick={(id) => (this.handleCheck(id))}/>
    }

    render() {
        let counter = this.state.taskCounter
        return(
            <div className="board">
                {this.setTasks(counter)}
                {this.setComplete(counter)}
            </div>
        );
    }
}

export default Board;
import React from "react";

import "./task.css";

class Task extends React.Component {
    checkComplete(ok) {
        if (ok) {
            return(<></>)
        }
        return(
            <div className="property">
                props)
            </div>
        );
    }

    render() {
        return (
            <div className="task">
                <div className="check">
                    <input type="checkbox" onClick={this.props.onclick(this.props.id)}/>
                </div>
                <div className="description">
                    {this.props.description}
                </div>
                {this.checkComplete(this.props.complete)}
            </div>
        );
    }
}

export default Task;
import React from "react";

export default class Overview extends React.Component {
  getCompletedTasks = () => {
    return this.props.tasks.filter((task) => task.completed);
  };

  getPendingTasks = () => {
    return this.props.tasks.filter((task) => !task.completed);
  };
  
  render() {
    return (
      <div className="tasks">
        <PendingTasks completeTask={this.props.completeTask} pendingTasks={this.getPendingTasks()} />
        <CompletedTasks deleteTask={this.props.deleteTask} completedTasks={this.getCompletedTasks()} />
      </div>
    );
  }
}

class PendingTasks extends React.Component {
  render() {
    return (
      <div className="pending-tasks">
        <h2>
          <span>{this.props.pendingTasks.length} </span>
          Pending Tasks 
          <span className="tasks__hint">
            (Click on a task to mark it as completed)
          </span>
        </h2>
        <hr />
        <ul>
          {this.props.pendingTasks.length > 0 ? (
            this.props.pendingTasks.map((task) => {
              return (
                <li key={task.id} onClick={() => this.props.completeTask(task.id)} className="some">
                  <span className="check incomplete">X</span>
                  <span>{task.title}</span>
                </li>
              );
            })
          ) : (
            <li className="none">No pending tasks</li>
          )}
        </ul>
      </div>
    );
  }
}

class CompletedTasks extends React.Component {
  render() {
    return (
      <div className="completed-tasks">
        <h2>
          <span> {this.props.completedTasks.length} </span>
          Completed Tasks
          <span className="tasks__hint">
            (Click on a task to delete it)
          </span>
        </h2>
        <hr />
        <ul>
          {this.props.completedTasks.length > 0 ? (
            this.props.completedTasks.map((task) => {
              return (
                <li key={task.id} onClick={() => this.props.deleteTask(task.id)} className="some">
                  <span className="check completed">✔</span>
                  <span>{task.title}</span>
                </li>
              );
            })
          ) : (
            <li className="none">No completed tasks</li>
          )}
        </ul>
      </div>
    );
  }
}

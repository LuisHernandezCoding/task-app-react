import './App.css';
import React from 'react';
import Overview from './components/Overview';
import Footer from './components/Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      this.setState({
        tasks: tasks,
      });
    }
  };

  saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  };

  componentDidMount() {
    this.loadTasks();
  }

  componentDidUpdate() {
    this.saveTasks();
  }

  createTask = (title) => {
    if (title === '') {
      return;
    }
    const newTask = {
      id: this.state.tasks.length,
      title: title,
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  completeTask = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      }),
    });
  };

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="content">
          <h1 className="pageTitle">
            <span className="pageTitle__icon">📝</span>
            Task App
          </h1>
          <div className="input-group">
            <input type="text" placeholder="Add a task" className="input" aria-label="Add a task" 
              onFocus={(e) => (e.target.value = '')}
              onBlur={(e) => (e.target.placeholder = 'Add a task')} 
              autoComplete="new-task"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  this.createTask(e.target.value);
                }
              }}
            />
            <button className="btn" onClick={() => this.createTask(document.querySelector('.input').value)}>Add</button>
          </div>
          <Overview deleteTask={this.deleteTask} completeTask={this.completeTask} tasks={this.state.tasks} />
        </div>
        <Footer />
      </div>
    );
  }
}
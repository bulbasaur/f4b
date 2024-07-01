import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import './ToDoApp.css';

type filters = 'all' | 'completed' | 'not-completed';

type item = {
  id: number;
  text: string;
  completed: boolean;
};

type State = {
  todos: item[];
  filter: filters;
};
type Props = {};

export default class ToDoApp extends Component<Props, State> {
  state: State = {
    todos: [
      { id: 1, text: 'To-Do 1', completed: false },
      { id: 2, text: 'To-Do 2', completed: true },
      { id: 3, text: 'To-Do 3', completed: false },
    ],
    filter: 'all',
  };

  componentDidMount() {
    console.log('ToDoApp mounted');
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.todos !== this.state.todos) {
      console.log('To-Do List updated');
    }

    if (prevState.filter !== this.state.filter) {
      console.log('Filter updated');
    }
  }

  getFilteredTodos = () => {
    const { todos, filter } = this.state;

    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'not-completed':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }

  handleToggleCompleted = (index: number) => {
    let newTodos = [...this.state.todos];
    const todoIndex = newTodos.findIndex(todo => todo.id === index);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    this.setState({ todos: newTodos });
  };

  handleDelete = (index: number) => {
    let newTodos = [...this.state.todos];
    newTodos = newTodos.filter(function( obj ) {
      return obj.id !== index;
    });
    this.setState({ todos: newTodos });
  }

  handleAddTodo = () => {
    const input = document.querySelector('input');
    if (input) {
      const max = this.state.todos.reduce(function(prev, current) {
        return (prev && prev.id > current.id) ? prev : current
      });
      const newId = max ? max.id + 1 : 1;
      const newTodo = { id: newId, text: input.value, completed: false };
      this.setState({ todos: [...this.state.todos, newTodo] });
      input.value = '';
    }
  }

  render() {
    const getFilteredTodos = this.getFilteredTodos();

    return (
      <div className="todo-list">
        <h2>Todo List</h2>

        <div className="filters">
          <button
            onClick={() => this.setState({ filter: 'all' })}
            className={this.state.filter === 'all' ? 'active' : ''}
          >All</button>
          <button
            onClick={() => this.setState({ filter: 'completed' })}
            className={this.state.filter === 'completed' ? 'active' : ''}
          >Completed</button>
          <button
            onClick={() => this.setState({ filter: 'not-completed' })}
            className={this.state.filter === 'not-completed' ? 'active' : ''}
          >Not Completed</button>
        </div>

        <ul>
          {getFilteredTodos.map((todo, index) => (
            <li key={index} className={todo.completed ? 'completed' : ''}>
              <span>
                {todo.text}
              </span>
              
              <FontAwesomeIcon 
                icon={faFlag}
                onClick={() => this.handleToggleCompleted(todo.id)}
              />

              <button
                onClick={() => this.handleDelete(todo.id)}
              >Delete</button>
            </li>
          ))}
        </ul>

        <input type="text" />
        <button
          onClick={() => this.handleAddTodo()}
        >Add</button>
    </div>
    );
  }
}

import { CALL_API } from '../middleware/api';
import * as ACTION from '../constants/todo';

  const headers = new Headers({
    "Content-Type": "application/json",
  });

export const addTodo = (text) => {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:3001/todos',
      init: {
        method: 'PUT',
        body: JSON.stringify({text}),
        headers,
      },
      types: [
        ACTION.ADD_TODO_REQUEST,
        ACTION.ADD_TODO_SUCCESS,
        ACTION.ADD_TODO_FAILURE
      ],
    }
  };
};
export const deleteTodo = (id) => {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:3001/todos/${id}`,
      init: {
        method: 'DELETE',
        headers,
      },
      types: [
        ACTION.DELETE_TODO_REQUEST,
        ACTION.DELETE_TODO_SUCCESS,
        ACTION.DELETE_TODO_FAILURE
      ],
    }
  };
};
export const editTodo = (todo) => {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:3001/todos',
      init: {
        method: 'PUT',
        headers,
        body: JSON.stringify(todo)
      },
      types: [
        ACTION.EDIT_TODO_REQUEST,
        ACTION.EDIT_TODO_SUCCESS,
        ACTION.EDIT_TODO_FAILURE
      ],
    }
  };
};
export const completeTodo = (todo)  => this.editTodo({
  ...todo,
  completed: !todo.completed
});

export const completeAll = () => {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:3001/todos/complete-all',
      init: {
        method: 'POST',
        headers,
      },
      types: [
        ACTION.COMPLETE_ALL_REQUEST,
        ACTION.COMPLETE_ALL_SUCCESS,
        ACTION.COMPLETE_ALL_FAILURE
      ],
    }
  };
};
export const clearCompleted = () => {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:3001/todos/clear-completed',
      init: {
        method: 'POST',
        headers,
      },
      types: [
        ACTION.CLEAR_COMPLETED_REQUEST,
        ACTION.CLEAR_COMPLETED_SUCCESS,
        ACTION.CLEAR_COMPLETED_FAILURE
      ],
    }
  };
};


export const fetchTodos = () => {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:3001/todos',
      init: {
        method: 'GET',
        headers,
      },
      types: [
        ACTION.TODO_REQUEST,
        ACTION.TODO_SUCCESS,
        ACTION.TODO_FAILURE
      ],
    }
  };
};

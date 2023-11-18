import React from 'react';
import { Todo } from '../model';
import './styles.css';
import SingleTodo from './SingleTodo';

interface Props {
  todos: Todo[];
  toggleCompleteTodo:(id: number) => void;
  deleteTodo:(id: number) => void;
  updateTodo:(id: number, editTodo: string) => void;
}

const TodoList: React.FC<Props> = ({ todos, toggleCompleteTodo, deleteTodo, updateTodo }) => {
  return (
    <ul className='todos'>
    {todos.map((todo) => (
      <SingleTodo 
      todo={todo} 
      key={todo.id} 
      toggleCompleteTodo={toggleCompleteTodo}
      onDeleteTodo={deleteTodo}
      updateTodo={updateTodo}
      />
    ))}
  </ul>
  )
}

export default TodoList
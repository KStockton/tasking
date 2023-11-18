import React, { useCallback, useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  toggleCompleteTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
  updateTodo: (id: number, editTodo: string) => void
}

const KEY_PRESS = {
  ENTER: 'Enter'
}

const SingleTodo: React.FC<Props> = ({
  todo,
  toggleCompleteTodo,
  onDeleteTodo,
  updateTodo
}) => {
  const [editTodo, setEditTodo] = useState<string>(todo.content);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);

  const handleDone = useCallback(() => {
    toggleCompleteTodo(todo.id);
  }, [toggleCompleteTodo, todo.id]);

  const handleDeleteTodo = useCallback(() => {
    onDeleteTodo(todo.id);
  }, [onDeleteTodo, todo.id]);

  const handleEditTodo = useCallback((e: React.SyntheticEvent) => {
    if (!isEdit && !todo.isDone) {
      setIsEdit(!isEdit);
    }
  }, [isEdit, todo.isDone]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if(e.key === KEY_PRESS.ENTER){
      updateTodo(todo.id, editTodo)
      setIsEdit(false)
    }
  }

  return (
    <li className="todos__single">
      {isEdit ? (
        <input 
        value={editTodo}
        onChange={(e) => setEditTodo(e.target.value)}
        className='todos__single--text'
        onKeyDown={handleKeyPress}
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.content}</s>
      ) : (
        <span className="todos__single--text">{todo.content}</span>
      )}
      <div>
        <span className="icon" onClick={handleEditTodo}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={handleDeleteTodo}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={handleDone}>
          <MdDone />
        </span>
      </div>
    </li>
  );
};

export default SingleTodo;

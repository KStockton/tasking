import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (content) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          content: content,
          isDone: false,
        },
      ]);
      setContent("");
    }
  };

  const toggleCompleteTodo = (id: number) => {
    const newTodos = [...todos];
    let todoToToggle = newTodos.find((todo) => todo.id === id);
    if (todoToToggle) {
      todoToToggle.isDone = !todoToToggle.isDone;
      setTodos(newTodos);
    }
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (id: number, editTodo: string) => {

    const newTodos = [...todos]
    let todoToToggle = newTodos.find((todo) => todo.id === id);
    if(todoToToggle){
      todoToToggle.content = editTodo
    }
    setTodos(newTodos)
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField
        content={content}
        setContent={setContent}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        toggleCompleteTodo={toggleCompleteTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;

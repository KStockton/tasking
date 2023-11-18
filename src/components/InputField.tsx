import React, { useRef } from "react";
import "./styles.css";

interface Props {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ content, setContent, handleAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className="input" onSubmit={handleAddTodo}>
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter Task"
        className="input__box"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;

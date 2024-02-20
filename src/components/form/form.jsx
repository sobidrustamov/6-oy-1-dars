import React, { useState } from "react";
import customAxios from "../config/request";

export const Form = ({ getData }) => {
  const [input, setInput] = useState({ title: "", description: "" });

  const changeInput = (e) => {
    setInput((p) => ({ ...p, [e.target.name]: e.target.value }));
  };
  const submit = (e) => {
    e.preventDefault();
    customAxios
      .post("todos", input)
      .then((res) => {
        setInput(res.data);
      })
      .finally(() => {
        setInput({ title: "", description: "" });
        getData();
      });
  };
  return (
    <form
      onSubmit={submit}
      className="d-flex gap-2 flex-column align-items-center my-3"
    >
      <div>
        <input
          onChange={changeInput}
          value={input.title}
          name="title"
          type="text"
        />
      </div>
      <div>
        <input
          onChange={changeInput}
          value={input.description}
          name="description"
          type="text"
        />
      </div>
      <button type="submit">send</button>
    </form>
  );
};

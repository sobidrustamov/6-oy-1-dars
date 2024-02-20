import React from "react";
import customAxios from "../config/request";
export const Card = ({ title, description, id, getData }) => {
  const handleDelete = async () => {
    const url = "http://localhost:3000/todos";

    try {
      const res = await customAxios.delete(`todos/${id}`);
    } catch (error) {
    } finally {
      getData();
    }
  };

  const editItem = () => {
    let newTitle = prompt("", title);
    let newDescription = prompt("", description);
    customAxios
      .put(`todos/${id}`, { title: newTitle, description: newDescription })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .finally(() => {
        getData();
      });
  };
  return (
    <div>
      <h3>{description}</h3>
      <p>{title}</p>
      <button onClick={handleDelete}>delete</button>
      <button onClick={editItem}>edit</button>
    </div>
  );
};

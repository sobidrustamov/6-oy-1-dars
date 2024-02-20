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
    <div className="border p-2 m-2 d-flex flex-column gap-2 w-25">
      <h3>{description}</h3>
      <p>{title}</p>
      <button
        className="bg-danger border-0 py-3 rounded-5"
        onClick={handleDelete}
      >
        delete
      </button>
      <button className="bg-warning border-0 py-3 rounded-5" onClick={editItem}>
        edit
      </button>
    </div>
  );
};

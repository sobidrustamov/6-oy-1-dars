import React from "react";

export const Card = ({ description, id, getData }) => {
  const url = "http://localhost:3000/todos";
  const handleDelete = async () => {
    try {
      const res = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
    } catch (error) {
    } finally {
      getData();
    }
  };
  return (
    <div>
      <h3>{description}</h3>
      <p>{id}</p>
      <button onClick={handleDelete}>delete</button>
      <button>edit</button>
    </div>
  );
};

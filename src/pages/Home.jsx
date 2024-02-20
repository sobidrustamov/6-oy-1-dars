import React, { useEffect, useState } from "react";
import { Card } from "../components/card/card";

export const Home = () => {
  const url = "http://localhost:3000/todos";

  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  });
  return (
    <div>
      Home
      {data?.map((item, i) => (
        <Card key={i} {...item} getData={getData} />
      ))}
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Card } from "../components/card/card";
import { Form } from "../components/form/form";
import customAxios from "../components/config/request";

export const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    customAxios
      .get(`todos`, {
        params: {
          _limit: 4,
          _page: 1,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {loading ? (
        <h2>Loading..</h2>
      ) : (
        <div>
          <Form getData={getData} />{" "}
          {data?.map((item, i) => (
            <Card key={i} {...item} getData={getData} />
          ))}
        </div>
      )}
    </div>
  );
};

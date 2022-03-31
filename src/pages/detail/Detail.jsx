import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TodoistApi } from "@doist/todoist-api-typescript";

import "./Detail.css";

export default function Detail() {
  const params = useParams();
  const api = new TodoistApi(`${process.env.REACT_APP_API_KEY}`);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await api
      .getTask(+params.id)
      .then((task) => console.log(task))
      .catch((error) => console.log(error))
      .finally(() => {
        setIsReady(true);
      });
  };

  return <div>Detail</div>;
}

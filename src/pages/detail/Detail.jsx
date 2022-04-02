import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TodoistApi } from "@doist/todoist-api-typescript";

import "./Detail.css";
import LoadSpin from "../../components/loadSpin/LoadSpin";

export default function Detail() {
  const params = useParams();
  const api = new TodoistApi(`${process.env.REACT_APP_API_KEY}`);

  const [isReady, setIsReady] = useState(false);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await api
      .getTask(+params.id)
      .then((task) => setDetail(task))
      .catch((error) => console.log(error))
      .finally(() => {
        setIsReady(true);
      });
  };

  let result;
  if (isReady) {
    result = (
      <>
        <section className="taskDetailLayout">
          <div className="detailContainer">
            <h1 className="taskTitle">List Detail:</h1>
            <p>
              Title :<br />
              {detail.content}
            </p>
            <p>
              Description:
              <br />
              {detail.description}
            </p>
            <p>
              Created in:
              <br />
              {detail.created.slice(0, 10)}
            </p>
            <p>Status:</p>
            {detail.content.slice(0, 16) === "(task completed)" ? (
              <p className="statusComplete">Completed</p>
            ) : (
              <p className="statusNotComplete">Not Complete</p>
            )}
          </div>
        </section>
      </>
    );
  } else {
    result = <LoadSpin />;
  }

  return result;
}

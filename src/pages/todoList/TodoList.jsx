import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TodoList.css";

import { TodoistApi } from "@doist/todoist-api-typescript";

import LoadSpin from "../../components/loadSpin/LoadSpin";

export default function TodoList() {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const [buttonTrigger, setButtonTrigger] = useState(true);
  const [taskData, setTaskData] = useState([]);

  const api = new TodoistApi(`${process.env.REACT_APP_API_KEY}`);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await api
      .getTasks()
      .then((tasks) => setTaskData(tasks))
      .catch((error) => console.log(error))
      .finally(() => {
        setIsReady(true);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };

  let result;
  if (isReady) {
    result = (
      <>
        {console.log(taskData)}
        <section className="todoListLayout">
          <div className="newContainer taskContainer">
            <p className="taskTitle">Create New Task</p>
            <form onSubmit={onSubmit}>
              <label>Task Title</label>
              <input type="text" />
              <label>Task Description</label>
              <input type="text" />
              <input
                className="todoButton"
                type="submit"
                value="Submit"
              ></input>
            </form>
          </div>

          <div className="taskListContainer">
            <div className="searchContainer taskContainer">
              <p className="taskTitle">Search Task</p>
              <form onSubmit={onSubmit}>
                <label>Task Title</label>
                <input type="text" />
                <div className="TaskButtonContainer">
                  <input className="todoButton" type="submit" value="Search" />
                  <input
                    className="clearButton todoButton"
                    type="submit"
                    value="Clear"
                  />
                </div>
              </form>
            </div>
            <div className="listContainer taskContainer">
              {taskData.map((item) => {
                return (
                  <div key={item.id} className="taskContent">
                    <p>
                      {item.content.length > 40
                        ? item.content.slice(0, 40) + " . . ."
                        : item.content}
                    </p>
                    <ul>
                      <li
                        className="detailButton"
                        onClick={() => {
                          navigate(`/list-detail/${item.id}`);
                        }}
                      >
                        Detail
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-check checkButton" />
                      </li>
                      <li>
                        <i className="fa-solid fa-trash deleteButton" />
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  } else {
    result = <LoadSpin />;
  }

  return result;
}

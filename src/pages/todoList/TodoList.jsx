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
  }, [buttonTrigger]);

  const fetchData = () => {
    api
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

  const deleteClick = async (id) => {
    await api
      .closeTask(id)
      .then((isSuccess) => console.log(isSuccess))
      .catch((error) => console.log(error));

    setButtonTrigger(!buttonTrigger);
  };

  let result;
  if (isReady) {
    result = (
      <>
        {console.log(taskData)}
        <section className="todoListLayout">
          <div className="newContainer taskContainer">
            <p className="taskTitle">Create New list</p>
            <form onSubmit={onSubmit}>
              <label>List Title</label>
              <input type="text" />
              <label>List Description</label>
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
              <p className="taskTitle">Search list</p>
              <form onSubmit={onSubmit}>
                <label>List Title</label>
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
                      <li
                        onClick={() => {
                          console.log("clicked");
                          item.content = (
                            <span style={{ textDecoration: "line-through" }}>
                              {item.content}
                            </span>
                          );
                        }}
                      >
                        {item.completed ? (
                          <i className="fa-solid fa-rotate-left"></i>
                        ) : (
                          <i className="fa-regular fa-circle-check checkButton" />
                        )}
                      </li>

                      <li
                        onClick={() => {
                          deleteClick(item.id);
                        }}
                      >
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

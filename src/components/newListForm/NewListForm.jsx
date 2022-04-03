import React, { useContext, useState } from "react";
import { ThemeContext } from "../../routes/WebRoute";
import "./NewListForm.css";

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
    resetTitle: () => {
      setValue("");
    },
    resetDescrip: () => {
      setValue("");
    },
  };
};

export default function NewListForm({ onSubmit }) {
  const { resetTitle, ...listTitle } = useInputValue("");
  const { resetDescrip, ...listDescription } = useInputValue("");

  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div
      className={
        isDarkTheme
          ? "newContainer taskContainer darkNewListContainer"
          : "newContainer taskContainer"
      }
    >
      <p className="taskTitle">Create New list</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(listTitle.value, listDescription.value);
          resetTitle();
          resetDescrip();
        }}
      >
        <label>List Title</label>
        <input type="text" {...listTitle} placeholder="Input Title" />
        <label>List Description</label>
        <input
          type="text"
          {...listDescription}
          placeholder="Input Description"
        />
        <input className="todoButton" type="submit" value="Submit" />
      </form>
    </div>
  );
}

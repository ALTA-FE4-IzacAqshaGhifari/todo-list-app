import React, { useState } from "react";
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

  return (
    <div className="newContainer taskContainer">
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
        <input type="text" {...listTitle} />
        <label>List Description</label>
        <input type="text" {...listDescription} />
        <input className="todoButton" type="submit" value="Submit" />
      </form>
    </div>
  );
}

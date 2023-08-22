import React, { useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

import "./TodoForm.css";

const TodoForm = ({ openForm, setOpenForm }) => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("high_priority");

  const handleClick = () => {
    const data = {
      taskName: taskName,
      priority: priority,
      isDone: false,
    };

    console.log(data);

    console.log(validate(data));

    validate(data) &&
      axios
        .post("/todo", data)
        .then(function (response) {
          successToast("Added Sucessfully!!")
          console.log(response);
        })
        .catch(function (error) {
          errorToast("Something went wrong");
          console.log(error);
        });
  };

  const handleCancel = () => {
    setOpenForm(!openForm);
    openForm?
      document.getElementById("button-icon").style.transform="rotate(45deg)":
      document.getElementById("button-icon").style.transform="rotate(0deg)"
  }

  const successToast = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  
  const errorToast = (msg) => {
    toast.error(msg, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const validate = (data) => {
    console.log(data.taskName);
    return data.taskName ? true : false;
  };

  return (
    <div className={`todoFormContainer ${openForm ? "" : "show"}`}>
      <div className="form">
        <div className="todoFormHeading">Add Task</div>
        <div className="todoFormTitle">Task name</div>
        <input
          className="todoFormInput"
          value={taskName}
          onInput={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
        />
        <div className="todoFormTitle">Priority</div>
        <div className="todoFormDropDownWrapper">
        <select
          className="todoFormDropDown"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high_priority">High Priority</option>
          <option value="medium_priority">Medium Priority</option>
          <option value="low_priority">Low Priority</option>
        </select>
        </div>
        <div className="todoFormButtonWrapper" >
          <div className="todoFormCancelButton" onClick={handleCancel}>Cancel</div>
          <div className="todoFormButton" onClick={handleClick}>Add</div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;

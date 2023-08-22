import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";

import {MdOutlineDone} from "react-icons/md";
import {ImCross} from "react-icons/im";
import "./TodoTable.css";

const TodoTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("todo").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  const validatePriority = (priority)=>{
    return (priority==="high_priority"&&"High priority") || (priority==="low_priority"&&"Low priority") || (priority==="medium_priority"&&"Medium priority")
  }
  return (
    <div className="view-content">
      <div className="table-container">
        <table className="view-table">
          <thead className="view-thead">
            <tr>
              <th>Sno</th>
              <th>Task name</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>
          {/* {totalPage !== 0 && ( */}
          <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{val.taskName}</td>
                  <td className={val.priority[0]==="h"?"red":val.priority[0]==="m"?"yellow":"green"}>{validatePriority(val.priority)}</td>
                  <td>{val.isDone?<MdOutlineDone color="green"/>:<ImCross color="red"/>}</td>
                </tr>
              );
            })}
          </tbody>
          {/* )} */}
        </table>
        {/* {totalPage === 0 && !loading && (
          <p className="no-rows">No Rows found</p>
        )} */}
        {/* <div className="pagination">
          <div
            className="button"
            onClick={() => {
              currentPage !== 0 && setCurrentPage(currentPage - 1);
            }}
          >
            Previous
          </div>
          <p>
            Page {currentPage} of {totalPage}
          </p>
          <div
            className="button"
            onClick={() => {
              currentPage !== totalPage && setCurrentPage(currentPage + 1);
            }}
          >
            Next
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TodoTable;

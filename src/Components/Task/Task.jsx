import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { change, remove } from "../../Redux/Slices/TaaskSlice";
import "./Task.css";
const Task = () => {
  const list = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();
  const [sta, setSta] = useState("all");

  const tab = sta === "all" ? list : list.filter((e) => e.status === sta);
  const supp = (id) => {
    dispatch(remove(id));
  };
  const changer = (id, sta) => {
    dispatch(change({ id, status: sta }));
  };
  return (
    <div className="taskslist">
        <div className="filter">
      <label htmlFor="">Filter By State : </label>
      <select onChange={(e) => setSta(e.target.value)}>
        <option value="all">All</option>
        <option value="start">Start</option>
        <option value="progresse">In progresse</option>
        <option value="done">Done</option>
      </select>
      </div>
      {tab.map((e) => (
        <div key={e.id} className="task">
          <div >
            <h1> {e.text}</h1>
            <p> Task State : {e.status}</p>
          </div>
          {e.status === "start" && (
            <button onClick={() => changer(e.id, "progresse")}>start</button>
          )}
          {e.status === "progresse" && (
            <button onClick={() => changer(e.id, "done")}>Done</button>
          )}

          <button onClick={() => supp(e.id)}>delete</button>
        </div>
      ))}
      <div className="lien">
        <Link to={"/"}>Back</Link>
      </div>
    </div>
  );
};

export default Task;

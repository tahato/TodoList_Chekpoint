import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { add } from "../../Redux/Slices/TaaskSlice";
import { v4 as uuidv4 } from "uuid";
import './AddTask.css'

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ajouter = (txt) => {
    dispatch(add({ id: uuidv4(), text: txt, status: "start" }));
    setText("");
    navigate("/task");
  };

  return (
   
      <div className="formulaire">
        <form>
          <input
          className="put"
            type="text"
            required
            placeholder="Enter Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <button onClick={() => ajouter(text)} className="btn">Add</button>
        <Link id="lin" to={"task"}> My Tasks List</Link>
      </div>
   
  );
};

export default AddTask;

import React, { useState } from "react";
import { connect } from "react-redux";
import { tambahTodo } from "../redux/Reducers";
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle.esm";
import { motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    Todo: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tambahTodo: (obj) => dispatch(tambahTodo(obj)),
  };
};

const Todo = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Mohon di Isi");
    } else {
      props.tambahTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  return (
    <div className="tambahTodo">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        <AiFillCheckCircle />
      </motion.button>
      <br />
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);

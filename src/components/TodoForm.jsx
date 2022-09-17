import React, { useState } from "react";
import { connect } from "react-redux";
import {tambahTodo, selesaiTodo, hapusTodo, updateTodo,} from "../redux/Reducers";
import TodoItem from "./TodoList";
import { AnimatePresence, motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    Todo: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tambahTodo: (obj) => dispatch(tambahTodo(obj)),
    hapusTodo: (id) => dispatch(hapusTodo(id)),
    updateTodo: (obj) => dispatch(updateTodo(obj)),
    selesaiTodo: (id) => dispatch(selesaiTodo(id)),
  };
};

const TodoForm = (props) => {
  const [sort, setSort] = useState("Aktif");
  return (
    <div className="TodoForm">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("Aktif")}
        >
          Aktif
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("Selesai")}
        >
          Selesai
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("Semua")}
        >
          Semua
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
          {props.Todo.length > 0 && sort === "Aktif"
            ? props.Todo.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      hapusTodo={props.hapusTodo}
                      updateTodo={props.updateTodo}
                      selesaiTodo={props.selesaiTodo}
                    />
                  )
                );
              })
            : null}
          {props.Todo.length > 0 && sort === "Selesai"
            ? props.Todo.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      hapusTodo={props.hapusTodo}
                      updateTodo={props.updateTodo}
                      selesaiTodo={props.selesaiTodo}
                    />
                  )
                );
              })
            : null}
          {props.Todo.length > 0 && sort === "Semua"
            ? props.Todo.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    hapusTodo={props.hapusTodo}
                    updateTodo={props.updateTodo}
                    selesaiTodo={props.selesaiTodo}
                  />
                );
              })
            : null}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

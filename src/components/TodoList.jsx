import { motion } from "framer-motion";
import React, { useRef } from "react";
import { AiOutlineForm} from "@react-icons/all-files/ai/AiOutlineForm";
import {AiOutlineCloseCircle} from "@react-icons/all-files/ai/AiOutlineCloseCircle";
import { AiOutlineCheckCircle } from "@react-icons/all-files/ai/AiOutlineCheckCircle"

const TodoItem = (props) => {
  const { item, updateTodo, hapusTodo, selesaiTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <motion.li
      initial={{ x: "150vw", transition: { type: "just", duration: 1 } }}
      animate={{ x: 0, transition: { type: "just", duration: 1 } }}
      whileHover={{
        scale: 0.9,
        transition: { type: "just", duration: 0.1 },
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgb(88, 8, 8)",
      }}
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeFocus()}
        >
          {" "}
          <AiOutlineForm />{" "}
        </motion.button>
        {item.completed === false && (
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "green" }}
            onClick={() => selesaiTodo(item.id)}
          >
            <AiOutlineCheckCircle />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "rgb(217, 14, 14)" }}
          onClick={() => hapusTodo(item.id)}
        >
          {" "}
          <AiOutlineCloseCircle />
        </motion.button>{" "}
      </div>
      {item.completed && <span className="completed">Selesai</span>}
    </motion.li>
  );
};

export default TodoItem;

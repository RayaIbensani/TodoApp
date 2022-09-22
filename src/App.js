import "./App.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import {motion} from "framer-motion"
// import { initializeConnect } from "react-redux/es/components/connect";


function App() {
  return (
    <div className="App">
      <motion.h1
      initial={{ y: -100 }}
      animate={{ y: 9 }}
      transition={{ type:"spring", duration: 0.5 }}
      whileHover={{ scale: 1.2 }}
      >To Do List
      </motion.h1>
        <Todo />
        <TodoForm />
    </div>
  );
}

export default App;

// saya memakai framer motion untuk animasinya, saya sekalian belajar mengimplementasikannya 
// di tugas Todo list ini, berhubung ini tugas coding personal terakhir.
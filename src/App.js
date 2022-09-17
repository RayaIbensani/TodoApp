import "./App.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
// import { initializeConnect } from "react-redux/es/components/connect";


function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
        <Todo />
        <TodoForm />
    </div>
  );
}

export default App;

// saya memakai framer motion untuk animasinya, saya sekalian belajar mengimplementasikannya 
// di tugas Todo list ini, berhubung ini tugas coding personal terakhir.
import TodoApp from "./page/todoapp/TodoApp";

import "./App.css";
import NavBar from "./component/navbar/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <TodoApp />
      <ToastContainer />
    </div>
  );
}

export default App;

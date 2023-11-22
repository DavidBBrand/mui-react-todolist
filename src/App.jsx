import './App.css'
import CssBaseLine from "@mui/material/CssBaseLine"
import ToDoList from "./ToDoList"
import Navbar from "./Navbar";

function App() {
  

  return (
    <>
      <Navbar/>
      <CssBaseLine />
      <h1>Todos</h1>
      <ToDoList />

    </>
  )
}

export default App

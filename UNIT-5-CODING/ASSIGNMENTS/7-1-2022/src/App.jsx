
import { Header } from "antd/lib/layout/layout";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <Header>
        <TodoInput />
      </Header>
      <TodoList />
    </div>
  );
}
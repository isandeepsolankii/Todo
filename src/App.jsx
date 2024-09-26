import Styles from "./App.module.css";
import TodoSimpleProject from "./component/todo";

function App() {
  return (
    <>
      <div className={Styles.mainWrapper}>
        <TodoSimpleProject />
      </div>
    </>
  );
}

export default App;

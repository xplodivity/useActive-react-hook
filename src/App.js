import "./App.css";
import { useActive } from "./hooks/useActiveHook";

function App() {
  const active = useActive(1000);

  return (
    <div className="App">
      <div className={active ? "active" : "inactive"}>
        {active ? "user active" : "user is inactive"}
      </div>
    </div>
  );
}

export default App;

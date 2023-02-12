// Styles
import "./App.scss";

// Components
import { Navbar } from "../Navbar/Navbar";
import { BudgetPage } from "../BudgetPage/BudgetPage";

// Types

// State

function App() {
  return (
    <div className="App">
      <Navbar />
      <BudgetPage activeBudget={"test"} />
    </div>
  );
}

export default App;

import Header from "@components/Header/Header";
import SavingsForm from "@components/SavingsForm/SavingsForm";
import YearlySavingsList from "@components/YearlySavingsList/YearlySavingsList";
import { Investment, YearlySaving } from "@models/models";
import { useState } from "react";
import { calculate } from "./services/calculator.service";

function App() {

  const [savings, setSavings] = useState<YearlySaving[]>([]);

  const calculateSavings = (investment: Investment): void => {
    const newSavings = calculate(investment);
    setSavings(newSavings);
  }

  return (
    <div>
      <Header />
      <SavingsForm onValidSubmit={ calculateSavings } onReset={ () => setSavings([]) } />
      <YearlySavingsList savings={ savings } />
    </div>
  );
}

export default App;

import { Investment } from "@models/models";
import { useState } from "react";

import styles from './SavingsForm.module.scss';

interface Props {
  onValidSubmit: (investment: Investment) => void;
  onReset?: () => void;
}

export default function SavingsForm({ onValidSubmit, onReset }: Props) {

  const [investment, setInvestment] = useState<Investment>(Investment.Empty());

  const resetForm = () => {
    setInvestment(Investment.Empty());
    onReset?.();
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onValidSubmit(investment);
  }

  const onFormChange = <T extends Investment, TK extends keyof T>(key: TK, val: T[TK]) => {
    setInvestment(previous => ({
      ...previous,
      [key]: val
    }));
  }

  return (
    <form className={ styles.form } onSubmit={ submitForm }>
        <div className={ styles["input-group"] }>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={ (event) => onFormChange('currentSavings', event.target.valueAsNumber) } />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={ (event) => onFormChange('yearlyContribution', event.target.valueAsNumber) } />
          </p>
        </div>
        <div className={ styles["input-group"] }>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={ (event) => onFormChange('expectedInterestPerYear', event.target.valueAsNumber) } />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={ (event) => onFormChange('duration', event.target.valueAsNumber) }/>
          </p>
        </div>
        <p className={ styles.actions }>
          <button type="reset" className={ styles.buttonAlt } onClick={ resetForm }>
            Reset
          </button>
          <button type="submit" className={ styles.button }>
            Calculate
          </button>
        </p>
      </form>
  );
}

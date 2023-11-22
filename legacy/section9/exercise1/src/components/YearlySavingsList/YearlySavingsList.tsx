import { YearlySaving } from "@models/models";
import _ from "lodash";
import Dollars from "../Dollars";

import styles from './YearlySavingsList.module.scss';

interface Props {
  savings?: YearlySaving[]
}

export default function YearlySavingsList({ savings }: Props) {

  if(_.isNil(savings) || _.isEmpty(savings)) {
    return <p style={{ textAlign: 'center' }}>C'est vide....</p>
  }

  return (
      <table className={ styles.result }>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {savings.map(saving =>
            <tr key={ saving.yearNumber }>
              <td>{ saving.yearNumber }</td>
              <td><Dollars value={ saving.totalSavingsEndOfYear } /></td>
              <td><Dollars value={ saving.interestGainedInYear } /></td>
              <td><Dollars value={ saving.totalInterestGained } /></td>
              <td><Dollars value={ saving.totalInvestedCapital } /></td>
            </tr>
          )}
        </tbody>
      </table>
  );
}

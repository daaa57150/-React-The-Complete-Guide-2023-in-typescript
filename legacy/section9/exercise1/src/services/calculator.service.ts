import { Investment, YearlySaving } from "@models/models";
import _ from "lodash";

// TODO: this should be an injected service

export const calculate = (investment: Investment): YearlySaving[] => {
  const previous: YearlySaving = {
    yearNumber: 0,
    interestGainedInYear: 0,
    totalInterestGained: 0,
    totalInvestedCapital: investment.currentSavings,
    totalSavingsEndOfYear: investment.currentSavings
  };

  const interestRatio = investment.expectedInterestPerYear / 100;

  const result: YearlySaving[] = [];

  _.range(1, investment.duration + 1).forEach(yearNumber => {
    const interestGainedInYear = previous.totalSavingsEndOfYear * interestRatio;
    const totalInterestGained = previous.totalInterestGained + interestGainedInYear;

    const totalInvestedCapital = previous.totalInvestedCapital + investment.yearlyContribution;
    const totalSavingsEndOfYear = totalInvestedCapital + totalInterestGained;

    const saving = { yearNumber, interestGainedInYear, totalInterestGained, totalInvestedCapital, totalSavingsEndOfYear };
    _.assign(previous, saving);

    result.push(saving);
  });

  return result;
};




export type dollars = number;
export type years = number;
export type percent = number;

export interface Investment {
  currentSavings: dollars;
  yearlyContribution: dollars;
  expectedInterestPerYear: percent;
  duration: years;
}

export module Investment {
  export const Empty = (): Investment => ({
    currentSavings: 0,
    duration: 0,
    expectedInterestPerYear: 0,
    yearlyContribution: 0
  });
}

export interface YearlySaving {
  yearNumber: number;
  totalSavingsEndOfYear: dollars;
  interestGainedInYear: dollars;
  totalInterestGained: dollars;
  totalInvestedCapital: dollars;
}


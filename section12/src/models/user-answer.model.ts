


export interface TimeinAnswer {
  question: string;
  answer: AnswerWithIndex;
  didAnswer: true;
}

export interface TimeoutAnswer {
  question: string;
  didAnswer: false;
}

export type UserAnswer = TimeinAnswer | TimeoutAnswer;
export namespace UserAnswer {
  export const ofTimein = (question: string, answer: AnswerWithIndex): TimeinAnswer => ({
    question, answer, didAnswer: true
  });
  export const ofTimeout = (question: string): TimeoutAnswer => ({
    question, didAnswer: false
  });
}

export interface AnswerWithIndex {
  text: string;
  index?: number;
}

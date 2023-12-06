import { AnswerWithIndex, UserAnswer } from "@models/user-answer.model";
import { questions } from "@store/questions";
import { useCallback, useState } from "react";
import QuestionPanel from "./QuestionPanel";
import QuizzComplete from "./QuizzComplete";


export default function Quizz() {
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const index = userAnswers.length;
  const isQuizzFinished = index >= questions.length;

  if(isQuizzFinished) {
    return <QuizzComplete />
  };

  const question = questions[index];

  const selectAnswer = useCallback((answer: AnswerWithIndex) => {
    const userAnswer: UserAnswer = UserAnswer.ofTimein(question.text, answer);
    setUserAnswers(prev => [...prev, userAnswer]);
  }, []);

  const timeoutAnswer = useCallback(() => {
    const userAnswer: UserAnswer = UserAnswer.ofTimeout(question.text);
    setUserAnswers(prev => [...prev, userAnswer]);
  }, []);

  return (
    <div id="quiz">
      <QuestionPanel question={ question } onSelectAnswer={ selectAnswer } onTimeout={ timeoutAnswer } />
    </div>
  );
}

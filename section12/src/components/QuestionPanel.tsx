import { Question } from '@models/question.model';
import { AnswerWithIndex } from '@models/user-answer.model';
import _ from 'lodash';
import QuestionTimer from './QuestionTimer';

interface Props {
  question: Question;
  onSelectAnswer: (answer: AnswerWithIndex) => void;
  onTimeout: () => void;
}

export default function QuestionPanel({ question, onSelectAnswer, onTimeout }: Props) {

  const shuffled: AnswerWithIndex[] = _.shuffle(
    question.answers.map(
      (text, index) => ({ index, text })
    )
  );

  return (
    <div id="question">
      <QuestionTimer timeoutMilliseconds={ 10000 } onTimeout={ onTimeout } key={ question.id }/>
      <h2>{ question.text }</h2>
      <ul id="answers">
        {shuffled.map(answer => (
          <li className="answer" key={ answer.text }>
            <button onClick={ () => onSelectAnswer(answer) }>
              { answer.text } ({ answer.index })
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

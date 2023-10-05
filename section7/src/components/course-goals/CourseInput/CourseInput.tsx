import React, { useState } from 'react';


import Button from '@components/ui/Button/Button';
import u from '@shared/utils';
import './CourseInput.scss';

interface Props {
  onAddGoal: (id: string) => void;
}

const CourseInput = (props: Props) => {

  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsValid(checkIsValid(event.target.value));
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(checkIsValid(enteredValue)) {
      props.onAddGoal(enteredValue);
    }
  };

  const checkIsValid = (value: string) => !u.isNilOrWhitespace(value);

  return (
    <form onSubmit={ formSubmitHandler }>
      <div className="form-control">
        <label>Course Goal jjjj</label>
        <input type="text" onChange={ goalInputChangeHandler } />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

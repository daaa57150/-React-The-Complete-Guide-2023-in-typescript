import React, { useState } from 'react';


import Button from '@components/ui/Button/Button';
import './CourseInput.css';

interface Props {
  onAddGoal: (id: string) => void;
}

const CourseInput = (props: Props) => {

  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={ formSubmitHandler }>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={ goalInputChangeHandler } />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

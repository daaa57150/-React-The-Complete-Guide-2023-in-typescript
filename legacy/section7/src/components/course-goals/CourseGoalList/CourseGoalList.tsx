
import { Goal } from '@models/goal';
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';


interface Props {
  items: Goal[];
  onDeleteItem: (id: string) => void;

}

const CourseGoalList = (props: Props) => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem
          key={ goal.id }
          id={ goal.id }
          onDelete={ props.onDeleteItem }
        >
          { goal.text }
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;

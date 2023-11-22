import Button from "@components/ui/Button";
import FormattedDate from "@components/ui/FormattedDate";
import { Project, Task } from "@models/models";
import useForceUpdate from "use-force-update";
import TaskList from "./TaskList";

interface Props {
  project: Project;
  onDelete?: () => void;
}

export default function ProjectDetails({ project, onDelete }: Props) {
  const stateHasChanged = useForceUpdate();

  const addTask = (task: Task) => {
    project.addTask(task);
    stateHasChanged();
  };

  const removeTask = (task: Task) => {
    project.removeTask(task);
    stateHasChanged();
  }

  return (
    <>
      <h1>{ project.title }</h1>
      <div><FormattedDate date={ project.dueDate } /></div>
      <div><Button type="button" onClick={ onDelete }>Delete</Button></div>
      <h2>Tasks</h2>
      <TaskList tasks={ project.tasks } onAddTask={ addTask } onRemoveTask={ removeTask } />
    </>
  );
}

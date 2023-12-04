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
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{ project.title }</h1>
          <Button className="text-stone-600 hover:text-stone-950" type="button" onClick={ onDelete }>Delete</Button>
        </div>
        <p className="mb-4 text-stone-400"><FormattedDate date={ project.dueDate } /></p>
        <p className="text-stone-600 whitespace-pre-wrap">{ project.description }</p>
      </header>

      <h2>Tasks</h2>
      <TaskList tasks={ project.tasks } onAddTask={ addTask } onRemoveTask={ removeTask } />
    </div>
  );
}

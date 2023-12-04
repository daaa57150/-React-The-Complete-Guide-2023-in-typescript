import { Project } from "@models/models";
import _ from "lodash";

interface Props {
  projects: Project[];
  selectedProject?: Project;
  onSelectProject: (project: Project) => void;
}

export default function ProjectList({ projects, selectedProject, onSelectProject }: Props) {

  if(_.isEmpty(projects)) return;

  return <>
    <ul className="mt-8">
      { projects.map(project =>
        <li key={ project.id }>
          <button
            className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
            onClick={ () => onSelectProject(project) } style={ selectedProject === project ? { fontWeight: 'bold'} : {} }
          >
            { project.title }
          </button>
        </li>
      )}
    </ul>
  </>;
}

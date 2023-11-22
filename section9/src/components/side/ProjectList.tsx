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
    <ul>
      { projects.map(project =>
        <li key={ project.id }>
          <a onClick={ () => onSelectProject(project) } style={ selectedProject === project ? { fontWeight: 'bold'} : {} }>
            { project.title }
          </a>
        </li>
      )}
    </ul>
  </>;
}

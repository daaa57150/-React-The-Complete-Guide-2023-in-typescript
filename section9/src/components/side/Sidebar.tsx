import { Project } from "@models/models";
import ProjectList from "./ProjectList";

interface Props {
  projects: Project[];
  selectedProject?: Project;
  onCreateProject: () => void;
  onSelectProject: (project: Project) => void;
}

export default function Sidebar({ projects, selectedProject, onCreateProject, onSelectProject }: Props) {


  return <>
    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <h1>Your projects</h1>
        <button type="button" onClick={ onCreateProject }>+ Add project</button>
        <ProjectList projects={ projects } onSelectProject={ onSelectProject } selectedProject={ selectedProject }/>
      </div>
    </aside>
  </>;
}

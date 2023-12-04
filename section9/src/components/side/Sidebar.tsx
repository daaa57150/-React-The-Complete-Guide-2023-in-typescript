import PrimaryButton from "@components/ui/PrimaryButton";
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
    <aside id="default-sidebar" className="w-1/3 px-8 py-16 bg-stone-900 text-stone-300 md:w-72 rounded-r-xl" aria-label="Sidebar">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
        <div>
          <PrimaryButton onClick={ onCreateProject }>
            + Add project
          </PrimaryButton>
        </div>
        <ProjectList projects={ projects } onSelectProject={ onSelectProject } selectedProject={ selectedProject }/>
    </aside>
  </>;
}

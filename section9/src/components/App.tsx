import { Project } from '@models/models';
import { ReactNode, useState } from 'react';
import Sidebar from './side/Sidebar';

import _ from 'lodash';
import CreateProject from './main/CreateProject';
import MainContent from './main/MainContent';
import NoProjectSelected from './main/NoProjectSelected';
import ProjectDetails from './main/ProjectDetails';

type Route = 'no-project-selected' | 'create-project' | 'project-details';


export default function App() {

  console.log('Running App :)');

  const [selectedProject, setSelectedProject] = useState<Project|undefined>();
  const [projects, setProjects] = useState<Project[]>([]);
  const [route, setRoute] = useState<Route>('no-project-selected');

  const addProject = (project: Project) => {
    setProjects(oldProjects => [...oldProjects, project]);
    setSelectedProject(project);
    setRoute('project-details');
  };

  const deleteProject = (project: Project) => {
    setProjects(oldProjects => _.reject(oldProjects, { id: project.id }));
    setSelectedProject(project);
    setRoute('project-details');
  };

  const deleteSelectedProject = () => {
    if(!_.isNil(selectedProject)) {
      deleteProject(selectedProject);
    }
  }

  const renderMainContent = (route: Route): ReactNode => {
    switch(route) {
      case 'create-project':
        return <CreateProject
          onCreate={ addProject }
          onCancel={ () => setRoute('no-project-selected') }
        />
      case 'project-details':
        return <ProjectDetails
          project={ selectedProject! }
          onDelete={ deleteSelectedProject }
        />;
    }
    return <NoProjectSelected onCreateProject={ () => setRoute('create-project') } />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projects={ projects }
        selectedProject={ selectedProject }
        onCreateProject={ () => setRoute('create-project') }
        onSelectProject={ setSelectedProject }
      />

      <MainContent>
        { renderMainContent(route) }
      </MainContent>
    </main>
  );
}

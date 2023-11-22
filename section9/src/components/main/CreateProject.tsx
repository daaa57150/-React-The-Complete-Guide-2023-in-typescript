import Button from "@components/ui/Button";
import { Project } from "@models/models";
import { DomEvent, PropertyUpdateFn } from "@shared/types/common.types";
import _ from "lodash";
import { useState } from "react";

interface Props {
  onCancel?: () => void;
  onCreate?: (project: Project) => void;
}

export default function CreateProject({ onCancel, onCreate }: Props) {

  const [project, setProject] = useState<Partial<Project>>({});

  const submitForm = (event: DomEvent) => {
    event.preventDefault();
    if(checkProject(project)) {
      onCreate?.(Project.Of(project.title, project.description, project.dueDate));
    } else {
      alert("NON");
    }
  }

  const checkProject = (project: Partial<Project>): project is Omit<Project, 'id'> => {
    if(_.isEmpty(project.title)) return false;
    if(_.isEmpty(project.description)) return false;
    if(_.isNil(project.dueDate)) return false;
    return true;
  }

  const onFormChange: PropertyUpdateFn<Project> = (key, val) => {
    setProject(project => ({ ...project, [key]: val }));
  }

  return (
    <>
      <form onSubmit={ submitForm }>
        <div>
          <p>
            <label htmlFor="new-project-title">Title</label>
            <input type="text" id="new-project-title" onChange={ (event) => onFormChange('title', event.target.value) } />
          </p>
          <p>
            <label htmlFor="new-project-description">Description</label>
            <input type="text" id="new-project-description" onChange={ (event) => onFormChange('description', event.target.value) } />
          </p>
          <p>
            <label htmlFor="new-project-due-date">Description</label>
            <input type="date" id="new-project-due-date" onChange={ (event) => onFormChange('dueDate', event.target.valueAsDate) } />
          </p>
        </div>
        <Button type="submit">Save</Button>
        <Button type="button" onClick={ onCancel }>Cancel</Button>
      </form>
    </>
  );
}

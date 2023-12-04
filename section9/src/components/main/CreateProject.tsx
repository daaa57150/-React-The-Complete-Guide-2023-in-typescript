import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import Modal, { ModalRefHandle } from "@components/ui/Modal";
import { Project } from "@models/models";
import { DomEvent, PropertyUpdateFn } from "@shared/types/common.types";
import _ from "lodash";
import { useRef, useState } from "react";

interface Props {
  onCancel?: () => void;
  onCreate?: (project: Project) => void;
}

export default function CreateProject({ onCancel, onCreate }: Props) {

  const [project, setProject] = useState<Partial<Project>>({});

  const modal = useRef<ModalRefHandle>(null);

  const submitForm = (event: DomEvent) => {
    event.preventDefault();
    if(checkProject(project)) {
      onCreate?.(Project.Of(project.title, project.description, project.dueDate));
    } else {
      // alert("NON");
      modal.current?.open();
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

  // We could use this to get the values instead of onFormChange
  const title = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

  return <>
    <Modal ref={ modal }>
      <h2 className="text-xl font-bold text-stone-500 my-4">T'as des erreurs mec</h2>
    </Modal>


    <div className="w-[35rem] mt-16">

      <menu className="flex items-center justify-end gap-4 my-4">
        <Button type="button" className="text-stone-800 hover:text-stone-950" onClick={ onCancel }>Cancel</Button>
        <Button type="submit" className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950" form="createProjectForm">Save</Button>
      </menu>

      <form onSubmit={ submitForm } id="createProjectForm">
        <div>
          <Input ref={ title } label="Title" id="new-project-title"
            onChange={ (event) => onFormChange('title', event.target.value) }  />
          <Input label="Description" id="new-project-description" asTextarea
            onChange={ (event) => onFormChange('description', event.target.value) } />
          <Input label="Due date" type="date" id="new-project-due-date"
            onChange={ (event) => onFormChange('dueDate', event.target.valueAsDate) } />
        </div>
      </form>

    </div>
  </>;
}

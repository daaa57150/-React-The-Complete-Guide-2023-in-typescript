import noProjectImage from "@assets/no-projects.png";
import CreateButton from "@components/ui/CreateButton";

interface Props {
  onCreateProject: () => void;

}

export default function NoProjectSelected({ onCreateProject }: Props) {

  return (
    <div className="mt-24 text-center w2/3">
      <img src={ noProjectImage } className="w-16 h-16 object-contain mx-auto"/>
      <h2 className="text-xl font-bold text-stone-500 my-4">No project selected</h2>
      <p className="text-stone-400  mb-4">
        Select a project or create one.
      </p>
      <p className="mt-8">
        <CreateButton onClick={ onCreateProject }>Create new project</CreateButton>
      </p>
    </div>
  );
}

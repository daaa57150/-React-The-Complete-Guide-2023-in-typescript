import { PropsWithChildren } from "react";

interface Props {

}

export function MainContent({ children }: PropsWithChildren<Props>) {

  console.log('MainContent rendering');

  return <>
    <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700" >
          {/* id={ MainContent.id } */}
          { children }
        </div>
      </div>
  </>;
}

// export namespace MainContent {
//   export const id = "main-content";
//   export const mainContentElement = () => document.querySelector(`#${id}`)!;
//   export const show = (component: ReactNode) => {
//     const el = mainContentElement();
//     ReactDOM.createPortal(component, el);
//   }
// }

export default MainContent;

import { PropsWithChildren } from "react";

interface Props {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ onSubmit, children }: PropsWithChildren<Props>) {

  function submitPreventDefault(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.(event);
  }

  return (
    <form onSubmit={ submitPreventDefault }>
      { children }
    </form>
  );
}

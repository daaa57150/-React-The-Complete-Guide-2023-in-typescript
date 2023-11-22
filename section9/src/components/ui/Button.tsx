// import classes from './Button.module.css';

import { ButtonClickEvent } from "@shared/types/common.types";
import { PropsWithChildren } from "react";

interface Props {
  type?: "submit" | "reset" | "button",
  className?: string,
  disabled?: boolean
  onClick?: (event: ButtonClickEvent) => void;
}

const Button = (props: PropsWithChildren<Props>) => {
  return (
    <button
      type={ props.type || 'button' }
      className={ props.className ?? '' }
      onClick={ props.onClick }
      disabled={ props.disabled ?? false }
    >
      { props.children }
    </button>
  );
};

export default Button;

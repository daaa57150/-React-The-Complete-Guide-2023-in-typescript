
import { ButtonType } from '@shared/types/jsx.types';
import { MouseEventHandler, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  type: ButtonType;
}

const Button = (props: PropsWithChildren<Props>) => {
  return (
    <button type={ props.type } className={ styles.button } onClick={ props.onClick }>
      { props.children }
    </button>
  );
};

export default Button;

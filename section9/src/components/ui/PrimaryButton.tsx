import { PropsWithChildren } from 'react';
import Button, { ButtonProps } from './Button';

type Props = Omit<ButtonProps, 'className'>;

export default function PrimaryButton({ children, ...props } : PropsWithChildren<Props>) {

  return (
    <Button { ...props } className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
      { children }
    </Button>
  );
}

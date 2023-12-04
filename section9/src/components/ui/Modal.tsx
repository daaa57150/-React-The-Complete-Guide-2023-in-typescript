import { ForwardedRef, PropsWithChildren, forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import PrimaryButton from './PrimaryButton';

interface Props {

}

export interface ModalRefHandle {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef(({ children }: PropsWithChildren<Props>, ref: ForwardedRef<ModalRefHandle>) => {

  const dialog = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => ({
    open: () => dialog.current?.showModal(),
    close: () => dialog.current?.close()
  }));

  return createPortal(
    <dialog ref={ dialog } className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      { children }
      <div className="text-right mt-4">
        <PrimaryButton onClick={ () => dialog.current?.close() }>Close</PrimaryButton>
      </div>
    </dialog>, document.getElementById('modal-root')!
  );
});

export default Modal;

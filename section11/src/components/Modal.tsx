import { ForwardedRef, PropsWithChildren, forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export interface ModalRefHandle {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef(function Modal({ children }: PropsWithChildren<{}>, ref: ForwardedRef<ModalRefHandle>) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => dialog.current?.showModal(),
      close: () => dialog.current?.close()
    };
  });

  return createPortal(
    <dialog className="modal" ref={ dialog }>
      { children }
    </dialog>,
    document.getElementById('modal')!
  );
});

export default Modal;

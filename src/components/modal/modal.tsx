"use client";
import { createPortal } from "react-dom";
import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface IModalProps {
  open: boolean, 
  children: React.ReactNode,
  close: () => void
}

export default function Modal({open, children, close}: IModalProps) {
  const dialog = useRef<HTMLDialogElement | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const modal = dialog.current;
    
    if (open) {
      modal?.showModal();
    } 

    return (() => {
      modal?.close();
    })
  }, [open])

  if (!mounted) return null;
  
  return createPortal(
    <dialog className="modal" ref={dialog} onClose={close}> 
      <div className="flex flex-row justify-end pr-4 pt-4">
        <button className="p-2 modal-close" onClick={close}>
          <FontAwesomeIcon icon={faClose} size="lg"></FontAwesomeIcon>
        </button>
      </div>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')!
  )
}
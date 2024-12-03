"use client";
import { createPortal } from "react-dom";
import { useRef, useEffect, useState } from "react";

interface IModalProps {
  open: boolean, 
  children: React.ReactNode,
  onClose: () => void
}

export default function Modal({open, children, onClose}: IModalProps) {
  const dialog = useRef<HTMLDialogElement | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    if (dialog.current) {
      if (open) {
        dialog.current.showModal();
      } else {
        dialog.current.close();
      }
    }
  }, [open])

  if (!mounted) return null;
  
  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}> 
      <div className="flex flex-row justify-end pr-4 pt-4">
        <button onClick={onClose}>X</button>
      </div>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')!
  )
}
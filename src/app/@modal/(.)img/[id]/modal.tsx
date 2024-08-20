"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import type { ElementRef, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children }: Readonly<Required<PropsWithChildren>>) => {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  const onDismiss = () => {
    router.back();
  };

  return createPortal(
    <dialog
      ref={dialogRef}
      className="bg-zinc-900/50 text-white"
      onClose={onDismiss}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root")!,
  );
};

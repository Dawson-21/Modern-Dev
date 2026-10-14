"use client";

import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import * as m from "framer-motion/m";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  titleId?: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  titleId = "modal-title",
  children,
}: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <m.div
          key="modal"
          className="fixed inset-0 z-[999] flex items-center justify-center"
        >
          {/* The dim and blur sit beside the panel, not around it, so the
              panel's own glass blur can still see the page behind it. */}
          <m.div
            aria-hidden="true"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <m.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative max-h-[90dvh] w-[90%] max-w-lg overflow-y-auto border border-sky-400/50 bg-white/[0.035] p-4 text-white shadow-[0_0_40px_-12px_rgba(56,189,248,0.35)] backdrop-blur-xl sm:p-6"
            initial={{ scale: 0.5, opacity: 0.2 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 grid size-8 cursor-pointer place-items-center text-sky-400 transition-colors duration-200 hover:bg-sky-400/10 hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              aria-label="Close dialog"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            {children}
          </m.div>
        </m.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

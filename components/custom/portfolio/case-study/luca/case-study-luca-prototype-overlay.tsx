"use client";

import { ArrowLeft } from "lucide-react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { CaseStudyLucaPhonePrototype } from "@/components/custom/portfolio/case-study/luca/case-study-luca-phone-prototype";
import { RESPONSIVE } from "@/lib/constants";

function usePrototypeOverlayScrollLock(isOpen: boolean) {
  useEffect(() => {
    if (!isOpen || typeof document === "undefined") {
      return;
    }

    const scrollY = window.scrollY;
    const { body } = document;
    const previousPosition = body.style.position;
    const previousTop = body.style.top;
    const previousLeft = body.style.left;
    const previousRight = body.style.right;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";

    return () => {
      body.style.position = previousPosition;
      body.style.top = previousTop;
      body.style.left = previousLeft;
      body.style.right = previousRight;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);
}

type CaseStudyLucaPrototypeOverlayProps = {
  onClose: () => void;
};

export function CaseStudyLucaPrototypeOverlay({
  onClose,
}: CaseStudyLucaPrototypeOverlayProps) {
  const exitButtonRef = useRef<HTMLButtonElement>(null);

  usePrototypeOverlayScrollLock(true);

  useLayoutEffect(() => {
    exitButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Luca prototype"
      className={RESPONSIVE.caseStudyLucaPrototypeOverlay}
    >
      <header className={RESPONSIVE.caseStudyLucaPrototypeOverlayHeader}>
        <button
          ref={exitButtonRef}
          type="button"
          className={RESPONSIVE.caseStudyLucaPrototypeOverlayExit}
          onClick={onClose}
        >
          <ArrowLeft
            className={RESPONSIVE.caseStudyLucaPrototypeOverlayExitIcon}
            aria-hidden="true"
          />
          Back to the case study
        </button>
      </header>
      <div className={RESPONSIVE.caseStudyLucaPrototypeOverlayStage}>
        <CaseStudyLucaPhonePrototype variant="overlay" />
      </div>
    </div>,
    document.body,
  );
}

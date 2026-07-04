"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { CaseStudyLucaPhonePrototype } from "@/components/custom/portfolio/case-study/luca/case-study-luca-phone-prototype";
import { CaseStudyLucaPrototypeOverlay } from "@/components/custom/portfolio/case-study/luca/case-study-luca-prototype-overlay";
import { Button } from "@/components/ui/button";
import { RESPONSIVE } from "@/lib/constants";
import { LUCA_PROTOTYPE } from "@/lib/portfolio/case-studies/luca";

function subscribeToMdUp(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  mediaQuery.addEventListener("change", onStoreChange);
  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getMdUpSnapshot() {
  return window.matchMedia("(min-width: 768px)").matches;
}

function getMdUpServerSnapshot() {
  return false;
}

export function CaseStudyLucaPrototypeLauncher({
  rendersOverlay = true,
}: {
  rendersOverlay?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const launchButtonRef = useRef<HTMLButtonElement>(null);

  const isMdUp = useSyncExternalStore(
    subscribeToMdUp,
    getMdUpSnapshot,
    getMdUpServerSnapshot,
  );

  const isPrototypeOpen = searchParams.get("prototype") === "open";
  const showOverlay = isPrototypeOpen && !isMdUp;

  const openOverlay = useCallback(() => {
    router.push(`${pathname}?prototype=open`, { scroll: false });
  }, [router, pathname]);

  const closeOverlay = useCallback(() => {
    router.replace(pathname, { scroll: false });
  }, [router, pathname]);

  const wasOverlayOpenRef = useRef(false);

  useEffect(() => {
    if (wasOverlayOpenRef.current && !showOverlay) {
      launchButtonRef.current?.focus();
    }
    wasOverlayOpenRef.current = showOverlay;
  }, [showOverlay]);

  useEffect(() => {
    if (isPrototypeOpen && isMdUp) {
      router.replace(pathname, { scroll: false });
    }
  }, [isPrototypeOpen, isMdUp, router, pathname]);

  return (
    <>
      <div className={RESPONSIVE.caseStudyPhonePrototypeLaunchCtaWrap}>
        <Button ref={launchButtonRef} type="button" onClick={openOverlay}>
          Launch prototype
        </Button>
        <button
          type="button"
          className={RESPONSIVE.caseStudyLucaPrototypePreviewButton}
          onClick={openOverlay}
          aria-label="Launch Luca prototype from preview screenshot"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- phone-native PNG preview dimensions */}
          <img
            src={LUCA_PROTOTYPE.previewScreenshot.assetPath}
            alt={LUCA_PROTOTYPE.previewScreenshot.alt}
            width={LUCA_PROTOTYPE.previewScreenshot.width}
            height={LUCA_PROTOTYPE.previewScreenshot.height}
            decoding="async"
            className={RESPONSIVE.caseStudyLucaPrototypePreviewImage}
          />
        </button>
      </div>

      <div className={RESPONSIVE.caseStudyPhonePrototypeInlineWrap}>
        <div className={RESPONSIVE.caseStudyPhonePrototypeWrap}>
          <CaseStudyLucaPhonePrototype variant="embedded" />
        </div>
      </div>

      {rendersOverlay && showOverlay ? (
        <CaseStudyLucaPrototypeOverlay onClose={closeOverlay} />
      ) : null}
    </>
  );
}

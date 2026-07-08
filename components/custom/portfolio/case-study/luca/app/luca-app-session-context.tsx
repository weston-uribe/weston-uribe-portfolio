"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { WESTON_PROFILE } from "@/lib/portfolio/content";

type LucaAppSessionContextValue = {
  profileAvatarSrc: string;
  updateProfileAvatar: (file: File) => void;
};

const LucaAppSessionContext = createContext<LucaAppSessionContextValue | null>(
  null,
);

export function LucaAppSessionProvider({ children }: { children: ReactNode }) {
  const [profileAvatarSrc, setProfileAvatarSrc] = useState<string>(
    WESTON_PROFILE.assetPath,
  );
  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
      }
    };
  }, []);

  const updateProfileAvatar = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      return;
    }

    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
    }

    const nextObjectUrl = URL.createObjectURL(file);
    objectUrlRef.current = nextObjectUrl;
    setProfileAvatarSrc(nextObjectUrl);
  }, []);

  const value = useMemo(
    () => ({
      profileAvatarSrc,
      updateProfileAvatar,
    }),
    [profileAvatarSrc, updateProfileAvatar],
  );

  return (
    <LucaAppSessionContext.Provider value={value}>
      {children}
    </LucaAppSessionContext.Provider>
  );
}

export function useLucaAppSession() {
  const context = useContext(LucaAppSessionContext);

  if (!context) {
    throw new Error(
      "useLucaAppSession must be used within a LucaAppSessionProvider",
    );
  }

  return context;
}

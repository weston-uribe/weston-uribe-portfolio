import Image from "next/image";

import { RESPONSIVE } from "@/lib/constants";
import { WESTON_PROFILE } from "@/lib/portfolio/content";
import { cn } from "@/lib/utils";

type LucaAppProfileAvatarImageProps = {
  src: string;
  className?: string;
  imageClassName?: string;
  width: number;
  height: number;
};

export function LucaAppProfileAvatarImage({
  src,
  className,
  imageClassName,
  width,
  height,
}: LucaAppProfileAvatarImageProps) {
  const isObjectUrl = src.startsWith("blob:");

  if (isObjectUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- blob URLs are session-local uploads.
      <img
        src={src}
        alt=""
        width={width}
        height={height}
        className={cn(
          RESPONSIVE.profileAvatarImage,
          "size-full rounded-full",
          imageClassName,
          className,
        )}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={WESTON_PROFILE.alt}
      width={width}
      height={height}
      className={cn(
        RESPONSIVE.profileAvatarImage,
        "size-full rounded-full",
        imageClassName,
        className,
      )}
    />
  );
}

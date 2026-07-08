import Image from "next/image";

import { RESPONSIVE } from "@/lib/constants";
import type { LucaAppCommunityMember } from "@/lib/portfolio/case-studies/luca-app-community";
import { cn } from "@/lib/utils";

type LucaAppCommunityMemberCardProps = {
  member: LucaAppCommunityMember;
};

export function LucaAppCommunityMemberCard({
  member,
}: LucaAppCommunityMemberCardProps) {
  return (
    <article
      aria-label={`${member.name}, ${member.role}`}
      className={cn(
        RESPONSIVE.caseStudyLucaAppCommunityMemberCard,
        "select-none",
      )}
    >
      <div
        className={cn(
          RESPONSIVE.caseStudyLucaAppCommunityMemberAvatar,
          "relative",
        )}
        aria-hidden="true"
      >
        <Image
          src={member.avatarSrc}
          alt=""
          fill
          sizes="120px"
          draggable={false}
          className="pointer-events-none rounded-full object-cover select-none"
        />
      </div>
      <h2 className={RESPONSIVE.caseStudyLucaAppCommunityMemberName}>
        {member.name}
      </h2>
      <p className={RESPONSIVE.caseStudyLucaAppCommunityMemberRole}>
        {member.role}
      </p>
    </article>
  );
}

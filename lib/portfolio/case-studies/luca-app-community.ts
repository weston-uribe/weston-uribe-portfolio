export type LucaAppCommunityMember = {
  id: string;
  name: string;
  role: string;
  avatarSrc: string;
  avatarAlt: string;
};

export const LUCA_APP_COMMUNITY_MEMBERS: readonly LucaAppCommunityMember[] = [
  {
    id: "maria-chen",
    name: "Maria Chen",
    role: "School administrator",
    avatarSrc: "/images/luca/community/luca-community-avatar-administrator-v01.svg",
    avatarAlt: "Placeholder avatar for Maria Chen",
  },
  {
    id: "james-rivera",
    name: "James Rivera",
    role: "Counselor",
    avatarSrc: "/images/luca/community/luca-community-avatar-counselor-v01.svg",
    avatarAlt: "Placeholder avatar for James Rivera",
  },
  {
    id: "priya-patel",
    name: "Priya Patel",
    role: "Educator",
    avatarSrc: "/images/luca/community/luca-community-avatar-educator-v01.svg",
    avatarAlt: "Placeholder avatar for Priya Patel",
  },
] as const;

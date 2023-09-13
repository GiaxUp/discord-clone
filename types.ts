import { Server, Member, Profile } from "@prisma/client";

export type ServerWithMembersWitProfiles = Server & {
  members: (Member & { profile: Profile })[];
};

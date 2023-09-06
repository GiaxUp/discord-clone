import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  const profile = await initialProfile();

  // this will search through all the servers and we're gonna find
  // the first one that has the profile.id of one of the member of
  // that server
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  // if we manage to find a server that this member is a part of
  // we're gonna immediatly redirect them to that server
  if (server) {
    return redirect(`/servers/${server.id}`);
  }
  return <div>Create a Server</div>;
};

export default SetupPage;

import type { Metadata } from "next";
import { getUserWorkouts } from "@/db/query";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { EmptyPage } from "@/components/user/EmptyPage";
import { Workouts } from "@/components/user/Workouts";

export const metadata: Metadata = {
  title: "Workouts",
};

export default async function HomePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userId = user?.id as string;

  const workouts = await getUserWorkouts(userId);

  if (workouts.length < 1) {
    return <EmptyPage />;
  }

  return <Workouts workouts={workouts} userId={userId} />;
}

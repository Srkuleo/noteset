import { Suspense } from "react";
import {
  UserPagesSubHeadingWrapper,
  UserPagesSubHeadingText,
} from "@/components/user/UserPagesHeader";
import { LogsPageSkeleton } from "@/components/Loading";
import { LogsPageDataFetcher } from "@/components/user/logs/LogsPageDataFetcher";

import type { Metadata } from "next";
import type { LogsPageSearchParams } from "@/util/types";

export const metadata: Metadata = {
  title: "Logs",
};

export const dynamic = "force-dynamic";

export default async function LogsPage({ searchParams }: LogsPageSearchParams) {
  return (
    <>
      <UserPagesSubHeadingWrapper>
        <UserPagesSubHeadingText label="Logs" />
      </UserPagesSubHeadingWrapper>

      <Suspense fallback={<LogsPageSkeleton />}>
        <LogsPageDataFetcher searchParams={searchParams} />
      </Suspense>
    </>
  );
}

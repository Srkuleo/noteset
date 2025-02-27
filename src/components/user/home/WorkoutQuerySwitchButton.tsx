"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export const WorkoutQuerySwitchButton = () => {
  const path = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className="flex items-center gap-0.5 rounded-full shadow-md ring-1 ring-slate-300 dark:ring-slate-700">
      <Link
        href={path + "?q=current"}
        scroll={false}
        className={twMerge(
          "rounded-full px-4 py-1 active:bg-slate-200 dark:active:bg-slate-800",
          searchParams.get("q") === "current" && "bg-blue-400 dark:bg-blue-500",
        )}
      >
        <p
          className={twMerge(
            "font-manrope text-sm text-slate-400 dark:text-slate-500",
            searchParams.get("q") === "current" &&
              "text-base font-extrabold text-white dark:text-white",
          )}
        >
          C
        </p>
      </Link>

      <Link
        href={path + "?q=archived"}
        scroll={false}
        className={twMerge(
          "rounded-full px-4 py-1 active:bg-slate-200 dark:active:bg-slate-800",
          searchParams.get("q") === "archived" &&
            "bg-slate-500 dark:bg-slate-600",
        )}
      >
        <p
          className={twMerge(
            "font-manrope text-sm text-slate-400 dark:text-slate-500",
            searchParams.get("q") === "archived" &&
              "text-base font-extrabold text-white dark:text-white",
          )}
        >
          A
        </p>
      </Link>
    </div>
  );
};

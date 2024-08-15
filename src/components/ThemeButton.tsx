"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { twMerge } from "tailwind-merge";
import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ThemeIcon, SystemIcon, MoonIcon, SunIcon } from "./icons/theme";
import { CheckMarkIcon } from "./icons/user/submit-button";

type ThemeOptions = "system" | "dark" | "light";

export const ThemeButton = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  function chooseTheme(option: ThemeOptions) {
    setTheme(option);
    setOpen(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="focus:outline-none dark:text-slate-400">
        {ThemeIcon}
        <p className="sr-only">Toggle theme</p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-10 bg-slate-700/45 backdrop-blur-sm data-[state=closed]:animate-overlay-hide data-[state=open]:animate-overlay-show dark:bg-slate-950/45"
        />

        <Dialog.Content
          aria-describedby={undefined}
          onOpenAutoFocus={(e) => {
            e.preventDefault();
          }}
          className="absolute right-20 top-16 z-10 pt-safe-top data-[state=closed]:animate-dropdown-menu-scale-down data-[state=open]:animate-dropdown-menu-scale-up"
        >
          <VisuallyHidden asChild>
            <Dialog.Title>Choose a colour theme</Dialog.Title>
          </VisuallyHidden>

          <div className="flex w-48 flex-col divide-y divide-slate-300 rounded-modal bg-white/80 ring-1 ring-slate-400/80 dark:divide-slate-700 dark:bg-slate-800/80 dark:text-slate-400 dark:ring-slate-700">
            <button
              onClick={() => chooseTheme("system")}
              className={twMerge(
                "flex items-center gap-2 rounded-t-modal p-2 active:bg-slate-200 active:dark:bg-slate-800 [&>*:nth-child(2)]:mr-auto",
                theme === "system" && "bg-white dark:bg-slate-900",
              )}
            >
              {SystemIcon}
              <p className="text-sm font-semibold uppercase">System</p>

              {theme === "system" && (
                <CheckMarkIcon className="size-5 text-green-500" />
              )}
              <p className="sr-only">System theme</p>
            </button>

            <button
              onClick={() => chooseTheme("dark")}
              className={twMerge(
                "flex items-center gap-2 p-2 active:bg-slate-200 active:dark:bg-slate-800 [&>*:nth-child(2)]:mr-auto",
                theme === "dark" && "dark:bg-slate-900",
              )}
            >
              {MoonIcon}
              <p className="text-sm font-semibold uppercase">Dark</p>

              {theme === "dark" && (
                <CheckMarkIcon className="size-5 text-green-500" />
              )}
              <p className="sr-only">Dark theme</p>
            </button>

            <button
              onClick={() => chooseTheme("light")}
              className={twMerge(
                "flex items-center gap-2 rounded-b-modal p-2 active:bg-slate-200 active:dark:bg-slate-800 [&>*:nth-child(2)]:mr-auto",
                theme === "light" && "bg-white",
              )}
            >
              {SunIcon}
              <p className="text-sm font-semibold uppercase">Light</p>

              {theme === "light" && (
                <CheckMarkIcon className="size-5 text-green-500" />
              )}
              <p className="sr-only">Light theme</p>
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

import { Fragment, useState } from "react";
import { Drawer } from "vaul";
import { BUTTON_TIMEOUT, timeout } from "@/util/utils";
import { HideIcon, ShowIcon } from "../icons/user/preview";
import { StatusIndicator } from "../StatusIndicator";

import type { PartialWorkoutType } from "@/db/schema";
import { twMerge } from "tailwind-merge";

export const PreviewWorkoutDrawer = ({
  workout,
  open,
  toggleDrawer,
}: {
  workout: PartialWorkoutType;
  open: boolean;
  toggleDrawer: () => void;
}) => {
  return (
    <Drawer.Root
      open={open}
      onOpenChange={toggleDrawer}
      noBodyStyles
      disablePreventScroll
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-[9999] bg-slate-900/40 backdrop-blur-sm dark:bg-slate-950/70" />

        <Drawer.Content
          aria-describedby={undefined}
          className="fixed inset-x-0 bottom-0 z-[9999] px-2 focus:outline-none"
        >
          <div className="rounded-t-modal bg-white pb-safe-bottom ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700/70">
            <div className="rounded-t-modal border-b border-b-slate-300/50 bg-slate-200/55 py-3 dark:border-b-slate-700/70 dark:bg-slate-800">
              <Drawer.Handle className="bg-slate-300 dark:bg-slate-600" />

              <div className="flex items-center justify-between px-4 pt-4">
                <Drawer.Title className="text-lg uppercase text-slate-800">
                  {workout.title}
                </Drawer.Title>

                <StatusIndicator
                  status={workout.status}
                  className="bg-white px-4 py-2 ring-slate-300 dark:bg-slate-900 dark:ring-slate-700"
                />
              </div>
            </div>

            <div className="flex flex-col px-6 py-8">
              <div className="grid grid-cols-preview overflow-x-scroll overscroll-x-contain pb-8 text-sm md:justify-center">
                {workout.exercises.map((exercise, index) => (
                  <Fragment key={exercise.id}>
                    <p
                      className={`flex items-center pr-4 text-base font-bold text-slate-600 dark:text-white ${index !== workout.exercises.length - 1 ? "pb-6" : ""}`}
                    >
                      {exercise.name}
                    </p>

                    <div
                      className={`flex items-center border-x-2 border-slate-100 px-2 dark:border-slate-800 ${index !== workout.exercises.length - 1 ? "pb-6" : ""}`}
                    >
                      {exercise.sets.map((set) => (
                        <div
                          key={set.id}
                          className="flex min-w-28 justify-center gap-1 border-r-2 border-slate-100 last:border-r-0 dark:border-slate-800"
                        >
                          <p className="font-bold dark:text-slate-200">
                            {set.reps}
                          </p>
                          {set.weight && (
                            <p className="dark:text-slate-400">
                              ({set.weight}kg)
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    <p
                      className={`flex items-center pl-4 font-semibold text-slate-600 dark:text-white ${index !== workout.exercises.length - 1 ? "pb-6" : ""}`}
                    >
                      {exercise.note ? exercise.note : "..."}
                    </p>
                  </Fragment>
                ))}
              </div>

              <button
                onClick={async () => {
                  await timeout(BUTTON_TIMEOUT);

                  toggleDrawer();
                }}
                className="flex items-center justify-center gap-1 rounded-lg bg-slate-800 py-2 font-bold text-white outline-none active:bg-slate-600 dark:bg-white dark:font-extrabold dark:text-slate-800 active:dark:bg-slate-300"
              >
                Hide
                <HideIcon strokeWidth={1.5} className="size-[22px]" />
              </button>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export const PreviewWorkoutDrawerWithTrigger = ({
  workout,
  className,
}: {
  workout: PartialWorkoutType;
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  function toggleDrawer() {
    setOpen(!open);
  }

  return (
    <>
      <button
        type="button"
        onClick={async () => {
          await timeout(BUTTON_TIMEOUT);
          setOpen(true);
        }}
        className={twMerge(
          "rounded-lg shadow-md ring-1 ring-inset active:scale-95",
          className,
        )}
      >
        <ShowIcon strokeWidth={1.3} className="size-6" />
        <p className="sr-only">Preview workout</p>
      </button>

      <PreviewWorkoutDrawer
        workout={workout}
        open={open}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
};

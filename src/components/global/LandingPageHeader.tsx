import { LandingPageButton } from "./LandingPageButton";
import { ThemeButton } from "./ThemeButton";
import { GitHubButton } from "./GitHubButton";

export const LandingPageHeader = () => {
  return (
    <div className="fixed w-full bg-slate-300/80 px-4 pt-safe-top backdrop-blur-sm dark:bg-slate-950/90">
      <div className="flex justify-between border-b border-slate-400/60 py-2 dark:border-slate-800">
        <LandingPageButton />
        <div className="flex items-center gap-4">
          <ThemeButton />
          <GitHubButton />
        </div>
      </div>
    </div>
  );
};

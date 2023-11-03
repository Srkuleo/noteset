import { LinkButtons, ThemeButton } from "./ClientButtons";
import { Logo } from "./Icons";
import { GitHubButton, LogoutButton } from "./ServerButtons";

export const UserPageHeader = () => {
  return (
    <>
      <HeaderBar />
      <Navbar />
    </>
  );
};

const HeaderBar = () => {
  return (
    <div className="mb-4 flex justify-between rounded-[28px] bg-white px-4 py-2 shadow-md dark:bg-slate-800">
      <Logo />
      <div className="flex items-center gap-4">
        <ThemeButton />
        <GitHubButton />
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="mb-8 flex gap-2">
      <LinkButtons />
      <LogoutButton />
    </div>
  );
};

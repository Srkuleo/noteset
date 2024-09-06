import { twMerge } from "tailwind-merge";
import { ErrorTriangleIcon } from "./icons/user/warning";

type ErrorComponentProps = React.HTMLAttributes<HTMLParagraphElement> & {
  errorArr?: string[];
  message?: string;
};

export const ErrorComponent = ({
  errorArr,
  message,
  className,
}: ErrorComponentProps) => {
  if (message) {
    return (
      <div className={twMerge("flex items-center gap-2.5 pt-2", className)}>
        <ErrorTriangleIcon size={6} />

        <p className="font-semibold leading-tight text-red-500 dark:text-slate-100">
          {message}
        </p>
      </div>
    );
  }

  if (!errorArr) {
    return null;
  }

  if (errorArr.length > 1) {
    const uniqueErrors = [...new Set(errorArr)];

    return (
      <div className={twMerge("space-y-2", className)}>
        {uniqueErrors.map((error, i) => (
          <div key={i} className="flex items-center gap-1.5 pt-1">
            <ErrorTriangleIcon size={5} />

            <p className="text-sm font-semibold leading-tight text-red-500 dark:text-white">
              {error}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={twMerge("flex items-center gap-1.5 pt-1", className)}>
      <ErrorTriangleIcon size={5} />

      <p className="text-sm font-semibold leading-tight text-red-500 dark:text-white">
        {errorArr[0]}
      </p>
    </div>
  );
};

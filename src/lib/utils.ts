import { clsx, type ClassValue } from "clsx";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Wait for a given number of seconds
 * @param seconds Number of seconds to wait
 */
export const wait = async (seconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

export const handleSetSearchParams = (
  values: Record<string, string>,
  searchParams: ReadonlyURLSearchParams,
  router: AppRouterInstance,
  endpoints?: string,
) => {
  const params = new URLSearchParams(searchParams.toString());

  for (const [key, value] of Object.entries(values)) {
    if (value === "") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
  }
  if (endpoints) {
    router.push(`${endpoints}/?${params.toString()}`, { scroll: false });
  } else {
    router.push(`?${params.toString()}`, { scroll: false });
  }
};

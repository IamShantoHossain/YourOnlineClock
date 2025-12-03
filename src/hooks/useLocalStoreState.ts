import { useState } from "react";

type Options<T> = {
  defaultValue: T;
  serializer?: (v: T) => string;
  deserializer?: (v: string) => T;
};

export const useLocalStorageState = <T>(
  key: string,
  {
    defaultValue,
    serializer = JSON.stringify,
    deserializer = JSON.parse,
  }: Options<T>,
) => {
  const [state, setState] = useState<T>(() => {
    if (typeof window === "undefined") return defaultValue;
    try {
      const stored = localStorage.getItem(key);
      return stored ? deserializer(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  // Update localStorage whenever state changes
  const setValue = (value: T) => {
    try {
      localStorage.setItem(key, serializer(value));
      setState(value);
    } catch {}
  };

  return [state, setValue] as const;
};

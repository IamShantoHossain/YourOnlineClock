import { useEffect, useState } from "react";

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
  const [isLoading, setIsLoading] = useState(true);

  const [state, setState] = useState<T>(() => {
    if (typeof window === "undefined") return defaultValue;
    try {
      const stored = localStorage.getItem(key);
      return stored ? deserializer(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, serializer(state));
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [key, state, serializer]);

  const remove = () => {
    localStorage.removeItem(key);
    setState(defaultValue);
  };

  return [state, setState, remove, isLoading] as const;
};

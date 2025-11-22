const isDev = process.env.NODE_ENV === "development";

export const AppConfig = {
  backendUrl: isDev
    ? process.env.NEXT_PUBLIC_BASE_SERVER_URL
    : process.env.NEXT_PUBLIC_BASE_SERVER_URL,
};

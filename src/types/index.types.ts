export interface TMeta {
  totalPages: number;
  total: number;
  limit: number;
  page: number;
}

/** Standard API response sent to the client */
export type TApiResponse<T = any> = {
  statusCode?: number; // HTTP status code
  success?: boolean; // true if statusCode is 2xx/3xx
  message?: string; // optional message, could be from top-level or data.message
  data?: T | null; // actual payload
  meta?: TMeta; // optional pagination/meta info
};

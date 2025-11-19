import { TMeta } from "@/types/index.types";
import { AxiosError } from "axios";

export type TApiResponse<T> = {
  success: boolean;
  data?: T | null;
  error?: string | null;
  statusCode?: number;
  message?: string;
  meta?: TMeta;
};

/**
 * createAction
 * Wraps any async server function, handles errors, and returns standardized TApiResponse
 * Accepts a single `data` argument
 */
export function createAction<T, D = void>(action: (data: D) => Promise<T>) {
  return async (data: D): Promise<TApiResponse<T>> => {
    try {
      const result = await action(data);
      return result as TApiResponse<T>;
    } catch (error: any) {
      let statusCode = 500;
      let message = "An unexpected error occurred";

      if (error instanceof AxiosError) {
        statusCode = error.response?.status || 500;
        message = error.response?.data?.message || error.message || message;
      } else if (error instanceof Error) {
        message = error.message;
      }

      return {
        success: false,
        data: null,
        error: message,
        message,
        statusCode,
      } as TApiResponse<T>;
    }
  };
}

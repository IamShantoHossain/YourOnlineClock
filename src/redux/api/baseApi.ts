"use client";
import { AppConfig } from "@/config";
import { deleteCookie } from "@/lib/cookie";
import { ServerError_T, TApiResponse } from "@/types/index.types";
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";

// Define a service using a base URL and expected endpoints
export const baseQuery = fetchBaseQuery({
  baseUrl: `${AppConfig.backendUrl}/api/v1`,
  credentials: "include",
});

const baseQueryWithToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  const result = (await baseQuery(args, api, extraOptions)) as TApiResponse;

  const error = result as { error: { data: ServerError_T } };

  if (error?.error?.data?.data?.signOut) {
    await deleteCookie("accessToken");
    await deleteCookie("refreshToken");
    toast.error("Your session has expired. Please log in again.");
    window.location.href = "/auth/login";
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithToken,
  tagTypes: ["Products", "Categories"],
  endpoints: () => ({}),
});

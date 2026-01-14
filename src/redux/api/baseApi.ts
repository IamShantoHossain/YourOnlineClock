"use client";

import { AppConfig } from "@/config";
import { ServerError_T } from "@/types/index.types";
import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

// Define a service using a base URL and expected endpoints
export const baseQuery = fetchBaseQuery({
  baseUrl: `${AppConfig.backendUrl}/api/v1`,
  credentials: "include",
  prepareHeaders: (headers) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      headers.set("Authorization", `${accessToken}`);
    }

    headers.set("x-client-type", "MOBILE");
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);

  const error = result.error as { data: ServerError_T } | undefined;

  console.log({ error });

  if (error?.data?.data?.accessTokenExpired) {
    Cookies.remove("accessToken");

    const refreshToken = Cookies.get("refreshToken");
    if (!refreshToken) {
      window.location.href = "/auth/login";
      return result;
    }

    const { data: refreshData, error: refreshError } = await baseQuery(
      { url: "/auth/refresh-token", method: "POST", body: { refreshToken } },
      api,
      extraOptions,
    );

    if (refreshError) {
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      window.location.href = "/auth/login";
      return result;
    }

    const refreshDataTokens = refreshData as {
      data: { accessToken: string; refreshToken: string };
    };

    if (refreshData) {
      Cookies.set("accessToken", refreshDataTokens.data.accessToken);
      Cookies.set("refreshToken", refreshDataTokens.data.refreshToken);
      // retry original request with new access token
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Products", "Categories", "User", "Blogs"],
  endpoints: () => ({}),
});

export const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBlog: builder.mutation({
      query: (blogData) => ({
        url: "/blogs",
        method: "POST",
        body: blogData,
      }),
      invalidatesTags: ["Blogs"],
    }),
  }),
});

export const { useAddBlogMutation } = blogsApi;

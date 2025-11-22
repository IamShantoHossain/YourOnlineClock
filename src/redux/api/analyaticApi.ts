import { baseApi } from "./baseApi";

const analyticsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    dashboardAnalytics: builder.query({
      query: () => ({
        url: "/analytics/dashboard",
        method: "GET",
      }),
      transformResponse: (response) => ({
        analytics: response.data,
      }),
    }),
  }),
});

export const { useDashboardAnalyticsQuery } = analyticsApi;

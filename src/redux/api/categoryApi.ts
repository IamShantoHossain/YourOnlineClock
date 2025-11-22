import { generateParams } from "@/hooks/useQueryBuilder";
import { TQueryParam } from "@/types/index.types";
import { baseApi } from "./baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (paramsArray: TQueryParam[]) => {
        const params = generateParams(paramsArray);

        return {
          url: "/categories",
          method: "GET",
          params,
        };
      },
      transformResponse: (response) => ({
        categories: response.data.categories,
        meta: response.meta,
      }),
    }),
    getCategoryById: builder.query({
      query: (id: string) => ({
        url: `/categories/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery } = categoryApi;

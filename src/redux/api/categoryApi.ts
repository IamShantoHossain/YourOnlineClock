import { generateParams } from "@/hooks/useQueryBuilder";
import { Category_T } from "@/types/category.types";
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
      providesTags: ["Categories"],
      transformResponse: (response) => ({
        categories: response.data.categories as Category_T[],
        meta: response.meta,
      }),
    }),
    getCategoryById: builder.query({
      query: (id: string) => ({
        url: `/categories/${id}`,
        method: "GET",
      }),
      providesTags: ["Categories"],
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery } = categoryApi;

import { AddTutorialSchema_T } from "@/types/category.types";
import { baseApi } from "./baseApi";

const tutorialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTutorial: builder.mutation({
      query: ({
        categoryId,
        data,
      }: {
        categoryId: string;
        data: AddTutorialSchema_T;
      }) => ({
        url: `/categories/tutorials/${categoryId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),
    getTutorialsByCategory: builder.query({
      query: (categoryId: string) => ({
        url: `/categories/tutorials/${categoryId}`,
        method: "GET",
      }),
      providesTags: ["Categories"],
    }),
  }),
});

export const { useCreateTutorialMutation, useGetTutorialsByCategoryQuery } =
  tutorialApi;

import { baseApi } from "./baseApi";

const uploadApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadSingle: builder.mutation({
      query: (formData: FormData) => {
        return {
          url: "/uploads/upload-single",
          method: "POST",
          body: formData,
        };
      },
    }),
    deleteSingleFIle: builder.mutation({
      query: (fileUrls: string[]) => {
        return {
          url: "/uploads/delete-files",
          method: "DELETE",
          body: { fileUrls },
        };
      },
    }),
  }),
});

export const { useUploadSingleMutation, useDeleteSingleFIleMutation } =
  uploadApi;

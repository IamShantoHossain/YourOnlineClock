import { Blog_T } from "@/types/blog.types";
import { TMeta } from "@/types/index.types";
import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all blogs
    getAllBlogs: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      transformResponse: (response: { data: any[]; meta?: any }) => ({
        data: response.data as Blog_T[],
        meta: response?.meta as TMeta,
      }),
      providesTags: ["Blogs"],
    }),

    // Create a new blog
    createBlog: builder.mutation({
      query: (data: FormData) => ({
        url: "/blogs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Blogs"],
    }),

    // Update a blog by ID
    updateBlog: builder.mutation({
      query: ({ id, data }: { id: string; data: FormData }) => ({
        url: `/blogs/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Blogs"],
    }),

    // Delete a blog by ID
    deleteBlog: builder.mutation({
      query: (data: FormData) => ({
        url: `/blogs/${data.get("id")}`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["Blogs"],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;

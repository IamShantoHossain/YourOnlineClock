import { LoginInputT } from "@/schema/auth.schema";
import { LoginResponseT } from "@/types/auth.types";
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginAdmin: builder.mutation<LoginResponseT, LoginInputT>({
      query: (data) => ({
        url: "/auth/otp/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginAdminMutation } = authApi;

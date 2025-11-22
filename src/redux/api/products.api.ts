import { generateParams } from "@/hooks/useQueryBuilder";
import { TQueryParam } from "@/types/index.types";
import { Product } from "@/types/product.types";
import { baseApi } from "./baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (paramsArray: TQueryParam[]) => {
        const params = generateParams(paramsArray);

        return {
          url: "/products",
          method: "GET",
          params,
        };
      },
      transformResponse: (response) => ({
        products: response.data.products as Product[],
        meta: response.meta,
      }),
    }),
    getProductById: builder.query({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;

"use server";

import { createAction } from "@/lib/action";
import { serverApi } from "@/lib/serverAxios";
import { Product, ProductParams } from "@/types/product.types";

export const getAllProducts = createAction(
  async ({ params }: { params: ProductParams }) => {
    const res = await serverApi.get<{
      products: Product[];
    }>("/products", {
      params: params,
    });

    return res.data;
  },
);

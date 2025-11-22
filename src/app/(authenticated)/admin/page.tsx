"use client";

import { useGetProductsQuery } from "@/redux/api/products.api";
import Image from "next/image";

const Page = () => {
  const { data } = useGetProductsQuery([]);

  const products = data?.products ?? [];

  return (
    <div className="grid grid-cols-2 gap-3">
      {products?.map((product) => (
        <div key={product.id} className="h-full w-full">
          <Image
            unoptimized
            src={product.images[0].src}
            alt={product.name}
            width={100}
            height={100}
            className="h-full w-full rounded-lg border-2 border-blue-500/50 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Page;

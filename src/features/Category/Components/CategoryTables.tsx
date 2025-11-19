import { Pagination } from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

import { P } from "@/components/ui/typography";
import Image from "next/image";
import CategorySearch from "./CategorySearch";

const products = [
  {
    id: "prd-001",
    name: "Nike Air Max",
    size: "42",
    category: "Shoes",
    brand: "Nike",
    price: 129.99,
    imageUrls: ["/images/products/nike-air-max.jpg"],
    createdAt: "2025-01-15T10:30:00Z",
    user: {
      fullName: "John Doe",
    },
    order: {
      deliveryStatus: "DELIVERED",
    },
  },
  {
    id: "prd-002",
    name: "Adidas Ultraboost",
    size: "44",
    category: "Shoes",
    brand: "Adidas",
    price: 149.99,
    imageUrls: ["/images/products/ultraboost.jpg"],
    createdAt: "2025-02-02T14:20:00Z",
    user: {
      fullName: "Sarah Khan",
    },
    order: {
      deliveryStatus: "PENDING",
    },
  },
  {
    id: "prd-003",
    name: "Puma Running Tee",
    size: "L",
    category: "Clothing",
    brand: "Puma",
    price: 39.99,
    imageUrls: ["/images/products/puma-tee.jpg"],
    createdAt: "2025-02-10T09:00:00Z",
    user: {
      fullName: "Alex Smith",
    },
    order: {
      deliveryStatus: "PROCESSING",
    },
  },
  {
    id: "prd-001",
    name: "Nike Air Max",
    size: "42",
    category: "Shoes",
    brand: "Nike",
    price: 129.99,
    imageUrls: ["/images/products/nike-air-max.jpg"],
    createdAt: "2025-01-15T10:30:00Z",
    user: {
      fullName: "John Doe",
    },
    order: {
      deliveryStatus: "DELIVERED",
    },
  },
  {
    id: "prd-002",
    name: "Adidas Ultraboost",
    size: "44",
    category: "Shoes",
    brand: "Adidas",
    price: 149.99,
    imageUrls: ["/images/products/ultraboost.jpg"],
    createdAt: "2025-02-02T14:20:00Z",
    user: {
      fullName: "Sarah Khan",
    },
    order: {
      deliveryStatus: "PENDING",
    },
  },
  {
    id: "prd-003",
    name: "Puma Running Tee",
    size: "L",
    category: "Clothing",
    brand: "Puma",
    price: 39.99,
    imageUrls: ["/images/products/puma-tee.jpg"],
    createdAt: "2025-02-10T09:00:00Z",
    user: {
      fullName: "Alex Smith",
    },
    order: {
      deliveryStatus: "PROCESSING",
    },
  },
  {
    id: "prd-001",
    name: "Nike Air Max",
    size: "42",
    category: "Shoes",
    brand: "Nike",
    price: 129.99,
    imageUrls: ["/images/products/nike-air-max.jpg"],
    createdAt: "2025-01-15T10:30:00Z",
    user: {
      fullName: "John Doe",
    },
    order: {
      deliveryStatus: "DELIVERED",
    },
  },
  {
    id: "prd-002",
    name: "Adidas Ultraboost",
    size: "44",
    category: "Shoes",
    brand: "Adidas",
    price: 149.99,
    imageUrls: ["/images/products/ultraboost.jpg"],
    createdAt: "2025-02-02T14:20:00Z",
    user: {
      fullName: "Sarah Khan",
    },
    order: {
      deliveryStatus: "PENDING",
    },
  },
  {
    id: "prd-003",
    name: "Puma Running Tee",
    size: "L",
    category: "Clothing",
    brand: "Puma",
    price: 39.99,
    imageUrls: ["/images/products/puma-tee.jpg"],
    createdAt: "2025-02-10T09:00:00Z",
    user: {
      fullName: "Alex Smith",
    },
    order: {
      deliveryStatus: "PROCESSING",
    },
  },
];

const meta = {
  totalPage: 30,
  currentPage: 1,
  total: 30,
};

const CategoryTable = () => {
  return (
    <div className="space-y-3">
      <CategorySearch />
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Product ID</TableHead>
            <TableHead>Product</TableHead>
            <TableHead className="pl-8">User</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead className="text-center">Price</TableHead>
            {/* New Table Head */}
            <TableHead className="text-center">Created At</TableHead>
            {/* <TableHead className="text-center">Actions</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell className="flex items-center gap-2">
                <Image
                  unoptimized
                  height={900}
                  width={900}
                  src={product.imageUrls[0]}
                  alt={product.name}
                  className="h-8 w-8 rounded-md object-cover"
                />
                <div>
                  <P className="">
                    {product.name} | {product.size}
                  </P>
                  <div className="flex gap-1">
                    <span className="text-muted-foreground text-sm">
                      {product.category}
                    </span>
                    |
                    <span className="text-muted-foreground text-sm">
                      {product.brand}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="pl-8">{product?.user?.fullName}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell className="text-center">
                ${product.price.toLocaleString()}
              </TableCell>

              <TableCell className="text-center">
                {format(new Date(product.createdAt), "dd/MM/yyyy HH:mm")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination totalPages={meta?.totalPage ?? 0} />
    </div>
  );
};

export default CategoryTable;

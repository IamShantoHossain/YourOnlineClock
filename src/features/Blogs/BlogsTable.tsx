"use client";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllBlogsQuery } from "@/redux/api/blogsApi";
import { Blog_T } from "@/types/blog.types";
import { AddBlogDialog } from "./AddBlogDialog";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
const ImageCell = ({ src }: { src?: string }) => {
  if (!src) {
    return <span className="text-muted-foreground">—</span>;
  }

  return (
    <img
      src={src}
      alt="blog"
      className="h-12 w-12 rounded-md border object-cover"
    />
  );
};

const ArrayCell = ({ items }: { items?: string[] }) => {
  if (!items || items.length === 0) {
    return <span className="text-muted-foreground">—</span>;
  }

  return (
    <div className="flex flex-wrap gap-1">
      {items.map((item, index) => (
        <Badge key={index} variant="secondary">
          {item}
        </Badge>
      ))}
    </div>
  );
};

// ---------- Component ----------
const BlogsTable = () => {
  const { data, isLoading, isError } = useGetAllBlogsQuery([]);
  const blogs: Blog_T[] = data?.data || [];

  if (isLoading) return <p>Loading blogs...</p>;
  if (isError) return <p>Failed to load blogs</p>;

  return (
    <div className="space-y-4">
      <BlogsHeader />

      <Table>
        <TableCaption>All Blogs</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Meta Keywords</TableHead>
            <TableHead>Featured</TableHead>
            <TableHead>OG</TableHead>
            <TableHead>Twitter</TableHead>
            <TableHead>Draft</TableHead>
            <TableHead>Published</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog.id}>
              {/* Title */}
              <TableCell className="font-medium">{blog.title}</TableCell>

              {/* Category */}
              <TableCell>{blog.category ?? "—"}</TableCell>

              {/* Tags */}
              <TableCell>
                <ArrayCell items={blog.tags} />
              </TableCell>

              {/* Meta Keywords */}
              <TableCell>
                {/* <ArrayCell items={blog.metaKeywords.splite(",")} /> */}
              </TableCell>

              {/* Images */}
              <TableCell>
                <ImageCell src={blog.featuredImage} />
              </TableCell>

              <TableCell>
                <ImageCell src={blog.ogImage} />
              </TableCell>

              <TableCell>
                <ImageCell src={blog.twitterImage} />
              </TableCell>

              {/* Draft */}
              <TableCell>{blog.isDraft ? "Yes" : "No"}</TableCell>

              {/* Published */}
              <TableCell>
                {blog.publishedAt
                  ? new Date(blog.publishedAt).toLocaleDateString()
                  : "—"}
              </TableCell>

              {/* Created */}
              <TableCell>
                {new Date(blog.createdAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={9}>Total Blogs</TableCell>
            <TableCell className="text-right">{blogs.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default BlogsTable;

const BlogsHeader = () => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-2xl font-bold">Blogs</h2>
      <AddBlogDialog />
    </div>
  );
};

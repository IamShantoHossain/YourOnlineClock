"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { handleRTKMutation } from "@/lib/handleRTKMutation";
import { useCreateBlogMutation } from "@/redux/api/blogsApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

// Zod schema for validation
const blogSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  slug: z.string().min(1),

  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  metaKeywords: z.array(z.string()).optional(),
  tags: z.array(z.string()),

  noIndex: z.boolean().optional(),
  noFollow: z.boolean().optional(),
  isDraft: z.boolean(),

  category: z.string().optional(),
  publishedAt: z.string().optional(),

  // FILES (handled separately)
  featuredImage: z.any().optional(),
  ogImage: z.any().optional(),
  twitterImage: z.any().optional(),
});

type BlogFormValues = z.infer<typeof blogSchema>;

export const BlogAddForm = ({
  isLoading,
  onSubmit,
}: {
  onSubmit: (data: BlogFormValues) => void;
  isLoading: boolean;
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      tags: [],
      isDraft: false,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-4xl space-y-6 p-4"
    >
      {/* Title */}{" "}
      <div>
        {" "}
        <Label htmlFor="title">Title</Label>
        <Input id="title" {...register("title")} />
        {errors.title && (
          <p className="text-red-500">{errors.title.message}</p>
        )}{" "}
      </div>
      {/* Content */}
      <div>
        <Label htmlFor="content">Content</Label>
        <Textarea id="content" {...register("content")} rows={8} />
        {errors.content && (
          <p className="text-red-500">{errors.content.message}</p>
        )}
      </div>
      {/* Slug */}
      <div>
        <Label htmlFor="slug">Slug</Label>
        <Input id="slug" {...register("slug")} />
        {errors.slug && <p className="text-red-500">{errors.slug.message}</p>}
      </div>
      {/* Meta info */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="metaTitle">Meta Title</Label>
          <Input id="metaTitle" {...register("metaTitle")} />
        </div>
        <div>
          <Label htmlFor="metaDescription">Meta Description</Label>
          <Textarea
            id="metaDescription"
            {...register("metaDescription")}
            rows={3}
          />
        </div>
      </div>
      {/* Keywords & Tags */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          id="metaKeywords"
          {...register("metaKeywords", {
            setValueAs: (v) =>
              typeof v === "string" ? v.split(",").map((s) => s.trim()) : [],
          })}
        />

        <Input
          id="tags"
          {...register("tags", {
            setValueAs: (v) =>
              typeof v === "string" ? v.split(",").map((s) => s.trim()) : [],
          })}
        />
      </div>
      {/* Images Upload Placeholder */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <Label>Featured Image</Label>
          <Input type="file" accept="image/*" {...register("featuredImage")} />
        </div>
        <div>
          <Label>OG Image</Label>
          <Input type="file" accept="image/*" {...register("ogImage")} />
        </div>
        <div>
          <Label>Twitter Image</Label>
          <Input type="file" accept="image/*" {...register("twitterImage")} />
        </div>
      </div>
      {/* Booleans */}
      <div className="flex gap-4">
        <Controller
          name="noIndex"
          control={control}
          render={({ field }) => (
            <Checkbox onChange={field.onChange} checked={field.value} />
          )}
        />
        <Label>No Index</Label>

        <Controller
          name="noFollow"
          control={control}
          render={({ field }) => (
            <Checkbox onChange={field.onChange} checked={field.value} />
          )}
        />
        <Label>No Follow</Label>

        <Controller
          name="isDraft"
          control={control}
          render={({ field }) => (
            <Checkbox onChange={field.onChange} checked={field.value} />
          )}
        />
        <Label>Is Draft</Label>
      </div>
      {/* Category */}
      <div>
        <Label htmlFor="category">Category</Label>
        <Input id="category" {...register("category")} />
      </div>
      {/* Published At */}
      <Button isLoading={isLoading} type="submit">
        Save Blog
      </Button>
    </form>
  );
};

export const AddBlogDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [createBlog, { isLoading }] = useCreateBlogMutation();

  const onSubmit = async (data: BlogFormValues) => {
    console.log({ data });
    const formData = new FormData();

    // ✅ ALL STRING / BOOLEAN / ARRAY DATA IN ONE OBJECT
    formData.append(
      "data",
      JSON.stringify({
        title: data.title,
        content: data.content,
        slug: data.slug,

        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        metaKeywords: data.metaKeywords?.join(", "),
        tags: data.tags,

        noIndex: data.noIndex,
        noFollow: data.noFollow,
        isDraft: data.isDraft,

        category: data.category,
      }),
    );

    // ✅ FILES ONLY
    if (data.featuredImage?.[0]) {
      formData.append("featuredImage", data.featuredImage[0]);
    }

    if (data.ogImage?.[0]) {
      formData.append("ogImage", data.ogImage[0]);
    }

    if (data.twitterImage?.[0]) {
      formData.append("twitterImage", data.twitterImage[0]);
    }

    await handleRTKMutation(createBlog(formData), {
      onSuccess: (data) => {
        setDialogOpen(false);
      },
      onError: (error) => {
        console.error("Error creating blog:", error);
      },
    });
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button>Add Blog</Button>
      </DialogTrigger>
      <DialogContent className="w-[90vw]! max-w-[800px]!">
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a simple dialog using ShadCN components.
          </DialogDescription>
        </DialogHeader>
        <BlogAddForm isLoading={isLoading} onSubmit={onSubmit} />
        <DialogFooter>
          <Button disabled={isLoading}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

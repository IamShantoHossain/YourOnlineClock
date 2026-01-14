export type Blog_T = {
  id: number;
  title: string;
  content: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string

  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  tags: string[];

  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;

  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;

  canonicalUrl?: string;
  authorName?: string;
  authorUrl?: string;
  publisherName?: string;
  publisherUrl?: string;
  schemaJson?: Record<string, any>;
  noIndex?: boolean;
  noFollow?: boolean;
  featuredImage?: string;
  readingTime?: number;
  excerpt?: string;
  category?: string;
  publishedAt?: string; // ISO date string
  isDraft: boolean;
};

// Types for API requests
export type AddBlogSchema_T = Omit<Blog_T, "id" | "createdAt" | "updatedAt">;
export type UpdateBlogSchema_T = Partial<AddBlogSchema_T>;

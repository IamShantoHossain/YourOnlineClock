export interface ProductParams {
  context?: "view" | "edit";
  page?: number; // default: 1, min: 1
  per_page?: number; // default: 10, min: 1, max: 100
  q?: string;
  after?: string; // ISO8601 date-time
  before?: string; // ISO8601 date-time
  modified_after?: string; // ISO8601 date-time
  modified_before?: string; // ISO8601 date-time
  dates_are_gmt?: boolean; // default: false
  exclude?: number[]; // default: []
  include?: number[]; // default: []
  offset?: number;
  order?: "asc" | "desc"; // default: "desc"
  orderby?:
    | "date"
    | "id"
    | "include"
    | "title"
    | "slug"
    | "modified"
    | "popularity"
    | "rating"
    | "post__in"
    | "price"
    | "sales"
    | "menu_order"
    | "random"; // default: "date"
  parent?: number[]; // default: []
  parent_exclude?: number[]; // default: []
  brand?: string;
  slug?: string;
  status?:
    | "any"
    | "future"
    | "trash"
    | "draft"
    | "pending"
    | "private"
    | "publish"; // default: "any"
  type?: "simple" | "grouped" | "external" | "variable";
  sku?: string;
  featured?: boolean;
  category?: string;
  tag?: string;
  shipping_class?: string;
  attribute?: string;
  attribute_term?: string;
  tax_class?: "standard" | "reduced-rate" | "zero-rate";
  on_sale?: boolean;
  min_price?: string;
  max_price?: string;
  include_meta?: string[]; // default: []
  exclude_meta?: string[]; // default: []
  stock_status?: "instock" | "outofstock" | "onbackorder";
  search_sku?: string;
  search_name_or_sku?: string;
  search_fields?: Array<
    "name" | "global_unique_id" | "description" | "short_description" | "sku"
  >; // default: []
  include_status?: Array<
    "any" | "future" | "trash" | "draft" | "pending" | "private" | "publish"
  >;
  exclude_status?: Array<
    "future" | "trash" | "draft" | "pending" | "private" | "publish"
  >;
  include_types?: Array<"simple" | "grouped" | "external" | "variable">;
  exclude_types?: Array<"simple" | "grouped" | "external" | "variable">;
  downloadable?: boolean;
  virtual?: boolean;
}

export type Product = {
  id: number;
  name: string;
  slug: string;
  price: string;
  regular_price: string;
  sale_price: string;
  stock_status: string;
  short_description: string;
  images: {
    src: string;
    alt: string;
    thumbnail: string;
  }[];
  date_created: string;
  average_rating: string;
  brands: Brand[];
  categories: Category[];
  date_modified_gmt: string;
};

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Brand {
  id: number;
  name: string;
  slug: string;
}

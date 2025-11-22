export type Category_T = {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
  image: {
    src: string;
    name: string;
  } | null;
  parent: number;
};

export type CategoryParams = {
  context?: "view" | "edit" | undefined;
  page?: number | undefined;
  per_page?: number | undefined;
  q?: string | undefined;
  exclude?: number[] | undefined;
  include?: number[] | undefined;
  offset?: number | undefined;
  order?: "asc" | "desc" | undefined;
  orderby?:
    | "include"
    | "id"
    | "name"
    | "slug"
    | "term_group"
    | "description"
    | "count"
    | undefined;
  hide_empty?: boolean | undefined;
  parent?: number | undefined;
  product?: number | null | undefined;
  slug?: string | undefined;
};

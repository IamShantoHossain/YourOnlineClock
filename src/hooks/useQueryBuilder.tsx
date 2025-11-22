import { TQueryParam } from "@/types/index.types";
import { useSearchParams } from "next/navigation";

export const useQueryBuilder = () => {
  const searchParams = useSearchParams();

  const q = searchParams.get("q") || "";
  const page = searchParams.get("page") || 1;
  const per_page = searchParams.get("per_page") || 10;

  const params = new URLSearchParams(searchParams.toString());
  const serQ = (newQ: string) => {
    params.set("q", newQ);

    window.history.pushState(null, "", "?" + params.toString());
  };

  const setPage = (newPage: string) => {
    params.set("page", String(newPage));

    window.history.pushState(null, "", "?" + params.toString());
  };

  const serPerPage = (newPerPage: string) => {
    params.set("per_page", newPerPage);

    window.history.pushState(null, "", "?" + params.toString());
  };

  const paramsArray: TQueryParam[] = [
    { name: "q", value: q },
    { name: "page", value: page },
    { name: "per_page", value: per_page },
  ];

  return { q, page, per_page, serQ, setPage, serPerPage, paramsArray };
};

export const generateParams = (args: TQueryParam[]) => {
  const params = new URLSearchParams();
  if (args)
    args.forEach((item) => params.append(item.name, item.value as string));

  return params;
};

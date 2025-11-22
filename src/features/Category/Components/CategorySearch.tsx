"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const CategorySearch = () => {
  const [searchTerm, setSetSearchTerm] = useState("");

  const [searchDebounce] = useDebounce(searchTerm, 300);
  const router = useRouter();

  useEffect(() => {
    history.pushState(null, "", `?q=${searchTerm}`);
    router.push("?q=" + searchTerm);
  }, [searchDebounce]);

  const searchParams = useSearchParams();

  return (
    <div className="flex justify-between gap-3">
      <div className="w-full">
        <Input
          placeholder="Search categories..."
          className="w-full"
          defaultValue={searchParams.get("query")?.toString()}
          value={searchTerm}
          onChange={(e) => setSetSearchTerm(e.target.value)}
        />
      </div>

      <Select>
        <SelectTrigger className="h-auto! w-[180px]">
          <SelectValue placeholder="Select a fruit" className="h-auto!" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategorySearch;

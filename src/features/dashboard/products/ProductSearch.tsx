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

const ProductSearch = () => {
  return (
    <div className="flex justify-between gap-3">
      <div className="w-full">
        <Input placeholder="Search categories..." className="w-full" />
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

export default ProductSearch;
